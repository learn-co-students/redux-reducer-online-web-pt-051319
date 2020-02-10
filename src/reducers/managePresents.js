export function managePresents(state = {
    numberOfPresents: 0,
}, action){

    switch(action.type) {
        case 'INCREASE':
            //had to lookk at Object.assign, only had the nOP and state.nOP + 1, lookig for answers where Object.assign came from
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            });
        default:
            return state;
    }
}
