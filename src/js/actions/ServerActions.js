var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  loggedIn: function(jwt) {

    AppDispatcher.handleServerAction({
      type: "LOGGED_IN",
      jwt: jwt
    });
  },

  loggedOut: function(res) {
    AppDispatcher.handleServerAction({
      type: "LOGGED_OUT"
    });
  },

  authChecked: function(res) {
    AppDispatcher.handleServerAction({
      type: "AUTH_CHECKED",
      res: res
    });
  },

  receiveProjects: function(projects) {
    AppDispatcher.handleServerAction({
      type: "RECEIVE_PROJECTS",
      projects: projects
    });
  },

  receiveProjectData: function(projectData) {
    AppDispatcher.handleServerAction({
      type: "RECEIVE_PROJECT_DATA",
      projectData: projectData
    });
  }

};