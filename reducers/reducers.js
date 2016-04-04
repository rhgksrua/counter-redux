
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('inc');
            return state + 1;
        case 'DECREMENT':
            console.log('dec');
            return state - 1;
        default:
            return state;
    }
};

export default counter;
