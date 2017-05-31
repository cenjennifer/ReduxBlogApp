import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

//Field knows how to communicate with redux-form (handles action create/event handlers); Doesn't know how to show itself on the screen
//reduxForm is a function that is similar to the connect function in the react-redux

class PostsNew extends Component {
	
	//field will call this function (within component) sometime in the future
	renderField(field){
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					type="text" 
					className="form-control"
					{...field.input}
				/>
				{field.meta.error}
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					label="Title For Post"
					name="title"
					component={this.renderField} />
				<Field
					label="Categories"
					name="categories"
					component={this.renderField} />
				<Field
					label="Post Content"
					name="content"
					component={this.renderField} />
			</form>
		)
	}
}

function validate(values) {
	//console.log('values', values) //=> {title: 'adsdf', ...}
	const errors = {};

	//Validate the inputs from 'values'
	if(!values.title){
		errors.title = "Enter a title!";
	}

	if (!values.categories){
		errors.content = "Enter some categories";
	}

	if(!values.content){
		errors.content = "Enter some content";
	}

	//if errors is empty, redux form assumes nothing is wrong with our form
	//if errors has *any* properties, redux form assumes form is invalid
	return errors;
}

//Field Props: 1.) name (name of state being produced), 2.) component: function that returns some amount of JSX

export default reduxForm({ //allow us to communicate directly from component to reducer of state
	form: 'PostsNewForm', //should be unique: name of form => ensure if we show multiple diff forms at the same time, redux form will handle all the diff state correctly; live in isolation and not share state with any other form
	validate //validate the form is called automatically
})(PostsNew);
//Note: if another file has the same form name (that form state will be merged together to this form state: Make sure string of form name is unique)