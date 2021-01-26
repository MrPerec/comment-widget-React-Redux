`use strict`;

import {START_POSITION, LENGTH, SYMBOL_T, SYMBOL_SPACE, ADD_COMMENT, DELETE_COMMENT} from '../constants/constants.js';

export function addComment(event, author, text) {
	event.preventDefault();
	const nowDateTime = new Date().toISOString().substr(START_POSITION, LENGTH).replace(SYMBOL_T, SYMBOL_SPACE);
	const uuid = getUuid();
	
	return {
		type: ADD_COMMENT,
		author,
		text,
		dateTime: nowDateTime,
		id: uuid
	}
}

export function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id
	}
}

const getUuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));