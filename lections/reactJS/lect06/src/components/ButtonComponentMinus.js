import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../reducers/counterSlice';

const ButtonComponent = (props) => {
    return (
        <button onClick={props.decrement}>Click me! -1</button>
    )
}

const mapDispatchToProps = {
    decrement
};

export default connect(null, mapDispatchToProps)(ButtonComponent);
