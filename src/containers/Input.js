import { connect } from 'react-redux';
import InputComponent from '../components/Input';
import { handleInput } from '../actions';


const mapDispatchToProps = dispatch => ({
    dispatch: (input) => {
        dispatch(handleInput(input));
    },
});

const Input = connect(() => ({}), mapDispatchToProps)(InputComponent);

export default Input;
