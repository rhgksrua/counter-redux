import { connect } from 'react-redux';

import { increment, decrement } from '../actions/actions';

import Controls from '../components/Controls';

/**
 * mapStateToProps. REQUIRED for connect() even though no state is passed.
 * 
 * ControlsContainer contains only Controls. This container does 
 * not need to know the state of the App.  It only dispatches
 * action that need to be performed by the App, which is increase
 * or decrease. Therefore, this function returns an empty object.
 * 
 * @params state
 * 
 * @return object
 */
const mapStateToProps = (state) => {
    return {
        
    };
}

/**
 * mapDispatchToProps. Increment and decrement count.
 * 
 * Not required if dispatch is not required by the component.
 * 
 * @params dispatch
 * 
 * @return object 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => {
            dispatch(increment());
        },
        onDecrementClick: () => {
            dispatch(decrement());
        }
    };
};

// connect requires mapStateProps!!!!!!
const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(Controls);

export default ControlsContainer;