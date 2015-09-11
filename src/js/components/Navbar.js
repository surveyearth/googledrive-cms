var React = require('react');

var Navbar = React.createClass({

    render: function() {

      var loggedIn = this.props.loggedIn;
      var items;

      if ( !loggedIn ){
        items = [
        { text: "Login", target: "../projects/login" },
        ]
      }
      else {
        items = [
        { text: "Home", target: "/projects/landing" },
        { text: "Project", target: "/projects/project" },
        { text: "Logout", target: "/projects/logout" }
        ]
      }

    var itemMarkup = items.map( function (menuItem){ return (
      <li> <a href={ menuItem.target }>{ menuItem.text }</a> </li>   
    )})

      return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">BRAND</a>
          </div>
        <ul className="nav navbar-nav navbar-right">
          { itemMarkup }
        </ul>
        </div>
      </div>
    )
  }
});

module.exports = Navbar;