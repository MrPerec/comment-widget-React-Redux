`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import CommentInput from '../components/CommentInput.js';
import CommentsList from '../components/CommentsList.js';
import {STORAGE_COMMENTS} from '../constants/constants.js';
import {addComment, deleteComment} from '../actions';

function App( {comments, addComment, deleteComment} ) {
		return(
			<div>
				<CommentInput 
					addComment={addComment}
				/>
				<CommentsList
					comments={comments}
					deleteComment={deleteComment}
				/>	
			</div>
		)
}

function mapStateToProps(state) {
	return {
		comments: state
	}
}

function mapDispatchToProps(dispatch) {
	return{
		addComment: (event, author, text) => dispatch( addComment(event, author, text) ),
		deleteComment: (id) => dispatch( deleteComment(id) )
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;