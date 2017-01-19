var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, useRouterHistory} = require('react-router');
var {createHashHistory} = require('history');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
