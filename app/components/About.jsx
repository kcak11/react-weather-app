var React = require('react');

var About = React.createClass({
	componentDidMount:function(){
		try{
			var allTools=document.querySelectorAll(".tools-item");
			for(var i=0;i<allTools.length;i++){
				(function(item,cb){
					setTimeout(function(){
						item.style.visibility="visible";
						if(cb){
							cb();
						}
					},(i*500));
				}(allTools[i],(i===allTools.length-1?function(){
					var allToolLinks=document.querySelectorAll(".tools-item a");
					for(var i=0;i<allToolLinks.length;i++){
						(function(item){
							setTimeout(function(){
								item.style.fontWeight="bold";
							},(i*500));
						}(allToolLinks[i]));
					}			
				}:null)));
			}
		}catch(exjs){
			if(window.console && window.console.log){
				console.log("Error:",exjs);
			}
		}
	},
	render:function(){
	  return (
		<div>
		  <h1 className="text-center page-title">About</h1>
		  <p>
			This is a weather application build using ReactJS.
		  </p>
		  <p>
			Here are some of the tools I used:
		  </p>
		  <ul>
			<li className="tools-item">
			  <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
			</li>
			<li className="tools-item">
			  <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
			</li>
			<li className="tools-item">
			  <a href="http://foundation.zurb.com">Foundation CSS Framework</a> - This was the CSS framework used.
			</li>
			<li className="tools-item">
			  <a href="http://github.com/kcak11/react-weather-app">Github</a> - Version control system.
			</li>
			<li className="tools-item">
			  <a href="http://babeljs.io">Babel Transpiler</a> - For transpiling ES6 code
			</li>
			<li className="tools-item">
			  <a href="http://webpack.github.io">Webpack Bundler</a> - For packaging the app
			</li>
		  </ul>
		  <div className="text-center">
			powered by <a href="http://www.ashishkumarkc.com" target="_blank" style={{"fontStyle":"italic","borderBottom":"2px solid #000"}}>Ashish's Web</a>
		  </div>
		</div>
	  )
	}
});


module.exports = About;
