import _ from "lodash";

export class GenericDatasource {

  constructor(instanceSettings, $q, backendSrv, templateSrv, contextSrv) {
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
    this.withCredentials = instanceSettings.withCredentials;
    this.headers = {'Content-Type': 'application/json'};
    if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
      this.headers['Authorization'] = instanceSettings.basicAuth;
    }
    this.contextSrv = contextSrv;
    //this.user = {};
  }

  doRequest(options) {
    options.withCredentials = this.withCredentials;
    options.headers = this.headers;
    return this.backendSrv.datasourceRequest(options);
  }

  query(options, path = '') {
    //console.log("datasource-metricsQuery: ", options);
    var query = options;
    // var query = this.buildQueryParameters(options);
    // query.target = query.target.filter(t => !t.hide);
    // if (query.target.length <= 0) {
    //   return this.q.when({data: []});
    // }
    return this.doRequest({
        url: this.url + path,
        data: query,
        method: 'POST'
    });
  }

  buildQueryParameters(options) {
    /* if(this.contextSrv.user.orgName) {
      options.user = {
        orgName: this.contextSrv.user.orgName,
        orgRole: this.contextSrv.user.orgRole,
        email: this.contextSrv.user.email,
        login: this.contextSrv.user.login
      };
    } */
    //remove placeholder targets
    // options.target = _.filter(options.target, target => {
    //   return target.target !== 'select metric';
    // });

    var target = _.map(options.target, target => {
      return {
        target: this.templateSrv.replace(target.target, options.scopedVars, 'regex'),
        refId: target.refId,
        hide: target.hide,
        type: target.type || 'timeserie'
      };
    });

    options.target = target;

    return options;
  }

  testDatasource() {
    return this.doRequest({
      url: this.url + '/',
      method: 'GET'
    }).then(response => {
      if (response.status === 200) {
        return { status: "success", message: "Data source is working", title: "Success" };
      }
    });
  }

  annotationQuery(options) {
    var query = this.templateSrv.replace(options.annotation.query, {}, 'glob');
    var annotationQuery = {
      range: options.range,
      annotation: {
        name: options.annotation.name,
        datasource: options.annotation.datasource,
        enable: options.annotation.enable,
        iconColor: options.annotation.iconColor,
        query: query
      },
      rangeRaw: options.rangeRaw
    };
    return this.doRequest({
      url: this.url + '/annotations',
      method: 'POST',
      data: annotationQuery
    }).then(result => {
      return result.data;
    });
  }

  /* metricFindQuery(query) {
    //console.log('search', query);
    var interpolated = {
      target: this.templateSrv.replace(query, null, 'pipe')
    };
    if(this.contextSrv.user.orgName) {
      interpolated.user = {
        orgName: this.contextSrv.user.orgName,
        orgRole: this.contextSrv.user.orgRole,
        email: this.contextSrv.user.email,
        login: this.contextSrv.user.login
      };
    }
    return this.doRequest({
      url: this.url + '/search',
      data: interpolated,
      method: 'POST',
    }).then(this.mapToTextValue);
  } */

  /* mapToTextValue(result) {
    //this.loading = false;
    var amtArr = result.data.length;
    return _.map(result.data, (d, i) => {
      if (d && d.text && d.value) {
        return { text: d.text, value: d.value };
      } else if (_.isObject(d)) {
        if (d.value === '' && amtArr == 1) return { text: 'empty', value: ''};
        return { text: d, value: i};
      }
      return { text: d, value: d };
    });
  } */
}