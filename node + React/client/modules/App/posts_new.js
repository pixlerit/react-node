import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from './AppActions';
import { Link } from 'react-router'; 

class PostsNew extends Component {
    static contextTypes = {
        router : PropTypes.object
    }
    onSubmit(props) {
        this.props.createPost(props)
         .then(() => {
             //Blog post has been created , navigate the user to the index 
             //we navigate by calling this.context.router.push with the 
             //new path navigate to.
             this.context.router.push('/');
         });
    }

    render() {
      const { fields:{ title, categories, content }, handleSubmit } = this.props;

    //  const handleSubmit = this.props.handleSubmit;
    //const title = this.props.fields.title; 
        return (
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h3>Create A New Post</h3>
              <div className="form-group">
                  <label>Title</label>
                  <input type="text" className= "form-control" {...title}/>
                 
              </div>
              <div className="form-group">
                  <label>Categories</label>
                  <input type="text" className= "form-control" {...categories}/>
                   
              </div>
              <div className="form-group">
                  <label>Content</label>
                  <textarea type="text" className= "form-control" {...content}/>
                  
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/" className="btn btn-danger">
              Cancel
              </Link>
          </form>
        );
    }
}
//connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first argument is formconfig, 2nd is mapDispatchToProps, 3rd is mapDispatchToProps
function validate(values) {
    const errors = {};
    if(!values.title) {
        errors.title = "Enter  a username";
    }
    if(!values.categories) {
        errors.categories = "Enter  categories";
    }
    if(!values.content) {
        errors.content = "Enter  some content";
    }
    return errors;
}

export default reduxForm({
    form:'PostsNewForm',
    fields: ['title','categories','content'],
    validate
}, null , { createPost })(PostsNew);