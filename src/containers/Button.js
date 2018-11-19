import { connect } from 'react-redux';
import ButtonComponent from '../components/Button';
import { sendClientMessage } from '../actions';


const mapDispatchToProps = dispatch => ({
  dispatch: (text) => {
    dispatch(sendClientMessage(text));
  },
});

const mapStateToProps = state => {
  return {
    text: state.input,
  };
};

 //const Button = connect(() => ({}), mapDispatchToProps)(ButtonComponent);

const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);

export default Button;
