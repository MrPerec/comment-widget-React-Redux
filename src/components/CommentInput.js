`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import {BOX_WIDTH, FIELD_WIDTH, FIELD_HEIGHT} from '../constants/constants.js';

function CommentInput( {addComment} ) {
	const onButtonClick = (event) => {
		addComment(
			event, 
			event.target.newAuthor.value,
			event.target.newText.value
		)
		event.target.newAuthor.value = ``;
		event.target.newText.value = ``;
	}; 
	return(
		<form onSubmit={onButtonClick}>
			<input 
				name='newAuthor'
				type='text' 
				size={BOX_WIDTH}
				placeholder='Ваше имя'
			/>
			<textarea 
				name='newText'
				cols={FIELD_WIDTH}
				rows={FIELD_HEIGHT}
				placeholder='Ваш комментарий'
			/>
			<input className='button' type='submit' value='Добавить' />
		</form>
	)
}

CommentInput.propTypes = {
	addComment: PropTypes.func.isRequired,
}

export default CommentInput