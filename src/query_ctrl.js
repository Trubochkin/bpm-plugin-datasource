import './css/query-editor.css!';

import {QueryCtrl} from 'app/plugins/sdk';
//import coreModule from 'grafana/app/core/core_module';
import $ from 'jquery';
import _ from 'lodash';


export class GenericDatasourceQueryCtrl extends QueryCtrl {

  constructor($scope, $injector, alertSrv)  {
    super($scope, $injector);

    this.scope = $scope;
    /* this.target.target = this.target.target || 'select metric'; */
    this.target.target = 'fakeSearch';
    this.target.type = this.target.type || 'timeserie';
    this.alertSrv = alertSrv;
    this.loading = false;
    this.loadingOk = false;
    this.loadingErr = false;
    //this.getOptions();
  }

  //getOptions(query) {
    //return [{text: '', value: ''}];
    /* this.loading = true;
    this.loadingOk = false;
    this.loadingErr = false;
    return this.datasource.metricFindQuery(query || '*')
    .then((data) => {
        this.loading = false;
        this.loadingOk = true;
        this.loadingErr = false;
        return data;
    }, err => {
        this.loading = false;
        this.loadingOk = false;
        this.loadingErr = true;
        this.alertSrv.set('Error ' + err.status, 'Metric data server is not available: ', 'error', 6000);
        this.target.target = err.statusText || 'select metric';
        return [{text: err.statusText, value: ''}];
    }); */
  //}

  /* toggleEditorMode() {
    this.target.rawQuery = !this.target.rawQuery;
  } */

  /* onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  } */
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

