var AppDispatcher = require('../dispatcher/AppDispatcher');

var WebAPIUtils = require('../utils/WebAPIUtils');

module.exports = {

  login: function(username, password, callback) {
    AppDispatcher.handleViewAction({
      type: "LOG_IN",
      username: username,
      password: password,
      callback: callback
    });
  },

  logout: function(res) {
    AppDispatcher.handleViewAction({
      type: "LOG_OUT"
    });
  },

  getProjects: function(){
    WebAPIUtils.getProjects( )
    AppDispatcher.handleViewAction({
      type: "GET_PROJECTS"
    });
  },

  getReport: function(folder_id , report_id){
    WebAPIUtils.getReport(folder_id , report_id)
    AppDispatcher.handleViewAction({
      type: "GET_REPORT"
    });
  },

  getReportLayout: function(folder_id , report_id){
    WebAPIUtils.getReport(folder_id , report_id)
    AppDispatcher.handleViewAction({
      type: "GET_REPORT_LAYOUT"
    });
  },

  saveReportLayout: function(layout, folder_id , report_id){
    WebAPIUtils.getReport(folder_id , report_id)
    AppDispatcher.handleViewAction({
      type: "SAVE_REPORT_LAYOUT"
    });
  }

};