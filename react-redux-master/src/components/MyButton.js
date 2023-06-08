import React from 'react';
import {useDispatch} from 'react-redux';
import increment from '../action';

const MyButton = () => {
    let dispatch = useDispatch();
    return(
        <Button onClick = {() => dispatch(increment(1))}>Increase counter</Button>
    );
}

export default MyButton;