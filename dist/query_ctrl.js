'use strict';

System.register(['./css/query-editor.css!', 'app/plugins/sdk', 'jquery', 'lodash'], function (_export, _context) {
  "use strict";

  var QueryCtrl, $, _, GenericDatasourceQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_cssQueryEditorCss) {}, function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl = function (_QueryCtrl) {
        _inherits(GenericDatasourceQueryCtrl, _QueryCtrl);

        function GenericDatasourceQueryCtrl($scope, $injector, alertSrv) {
          _classCallCheck(this, GenericDatasourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, (GenericDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(GenericDatasourceQueryCtrl)).call(this, $scope, $injector));

          _this.scope = $scope;
          /* this.target.target = this.target.target || 'select metric'; */
          _this.target.target = 'fakeSearch';
          _this.target.type = _this.target.type || 'timeserie';
          _this.alertSrv = alertSrv;
          _this.loading = false;
          _this.loadingOk = false;
          _this.loadingErr = false;
          //this.getOptions();
          return _this;
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


        return GenericDatasourceQueryCtrl;
      }(QueryCtrl));

      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl);

      GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
