import { connect } from 'react-redux';

import Display from '../components/Display';

const mapStateToProps = (state) => {
    return {
        number: state
    };
};

const ShowDisplay = connect(mapStateToProps)(Display);

export default ShowDisplay;
