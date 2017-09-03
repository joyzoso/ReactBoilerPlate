let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Load foundation


$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<p>Boilerplate3</p>,
  document.getElementById('app')
  );



//presentational components take props and render then to the screen
//state can be changes and props can't
//container components should just only render children and maintain state
//props are used for initializing a component with data
//state is used for keeping track of data that changes in a component
//presentational component uses props to display info
