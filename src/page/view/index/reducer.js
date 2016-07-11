import * as actionCreator from './action' 

export function list(state = {}, action) {
    switch (action.type) {
		case actionCreator.GETDATA: 
			return Object.assign({}, state,action);
        default:
			return state;
    }
}

