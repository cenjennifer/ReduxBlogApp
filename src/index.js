import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

//BroswerRouter: obj that interacts with the browser lib and decides what to do based on change in the url; I want react router to look at the entire url and decide what components to display on the screen; Interacts with the history lib

//Route: obj that is a react component with the purpose of configuring url (or customizing routes) to display particular components

//Switch component takes in a collections of diff routes - nest a couple of routes in a switch component

import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//testing purpose w/ ReactRouter
// class Hello extends React.Component {
// 	render(){
// 		return <div>Hello!</div>;
// 	}
// }

// class Goodbye extends React.Component {
// 	render(){
// 		return <div>Goodbye!</div>;
// 	}
// }

/* <div>
	Header: Show or hide child components
	<Route path="/hello" component={Hello} />
	<Route path="/goodbye" component={Goodbye} />
</div> */

//Switch component will look at the routes within the component and render the first one that matches the current url; put most specific route above all other routes in that component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path="/posts/new" component={PostsNew} />
    			<Route path="/" component={PostsIndex} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
