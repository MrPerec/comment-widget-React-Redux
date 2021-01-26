`use strict`;

import {ADD_COMMENT, DELETE_COMMENT} from '../constants/constants.js';

function comments( state = initialState, {type, author, text, dateTime, id} ) {
	switch (type) {
		case ADD_COMMENT:
			return[ ...state, {author, text, dateTime, id} ]
		case DELETE_COMMENT:
			return state.filter( (comment) => comment.id !== id);
		default: return state;
	}
}

export default comments;