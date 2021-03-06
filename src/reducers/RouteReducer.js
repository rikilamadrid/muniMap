import {
    SELECTED_ROUTES_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    // Some pre-set routes
    selectedRoutes: ['F', '1', '22', '38']
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_ROUTES_CHANGED:
            return { selectedRoutes: action.payload };
        default:
            return state;
    }
};
