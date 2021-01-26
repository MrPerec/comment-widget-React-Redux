`use strict`;

export function loadState() {
	try{
		const serializedState = localStorage.getItem(`state`);
		if (serializedState === null) {
			return [{
				author: ``,
				text: ``,
				dateTime: ``,
				id: ``
			}];
		} 
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;	
	} 
};

export function saveState(state){
	try{
		const serializedState = JSON.stringify(state);
		localStorage.setItem(`state`, serializedState)
	} catch (err){
	}
}