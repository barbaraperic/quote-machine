import { FETCH_QUOTE } from './actions'

const defaultState = {
    quote: ''
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_QUOTE:
            return {
                ...state,
                quote: action.quote
            }
            default:
                return state
    }
}