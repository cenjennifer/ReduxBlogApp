import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//How to do navigation in react? No more anchor tags b/c anchor tags do discrete navigation b/t diff routes in the browser. With react router, when navigating to a diff url, we want to show a diff set of components (we don't want the browser to make another request and fetch another doc in the server)
//Link: component provided by react-route; similar to anchor html tag; instead of 'href' property, use 'to' property;

class PostsIndex extends Component {
	//react lifecycle method: a fn on a react component class that is automatically called by react => e.g. componentDidMount, componentWillMount (call something before the component shows up on DOM)
	//immediately called when this component shows up in dom => initate this one time loading procedure
	//why do you want to fetch data when component shows up on screen? doesn't matter if we call it before or after this component renders on screen 
	//b/c fetching data is an aynchronous operation => react doesn't have the concept of figuring out not to render a component until some pre-load operation is called; react will always eagerly render the component whenever it can
	componentDidMount(){
		//kick of our data loading process => this is when we want to call the action creator
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return (
				<li class='list-group-item' key={post.id}>{post.title}</li>
			)
		});
	}

	render(){
		console.log(this.props.posts);
		return (
			<div>
				<div class="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts };
}


/*
...below is identical as using mapDispatchToProps
function mapDispatchToProps(dispatch){
	Note: es5 {fetchPosts: fetchPosts };
	return bindActionCreators({ fetchPosts }, dispatch);}
Note: Use function is you want to do computions on how you want to call the action creator ahead of time
*/

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);