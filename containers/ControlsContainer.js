import { connect } from 'react-redux';


import { increment, decrement } from '../actions/actions';

import Controls from '../components/Controls';

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => {
            dispatch(increment());
        },
        onDecrementClick: () => {
            dispatch(decremenet());
        }
    };
};

const ShowDisplay = connect(mapDispatchToProps)(Controls);

export default ControlsContainer;

