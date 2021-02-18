import React from 'react';
import {TextInput, StyleSheet} from 'react-native'

const Input = props => {
    return (
        // {...styles.input, ...props.style} takes in also style added from outside
        <TextInput {...props} style={{...styles.input, ...props.style}}  placeholder={props.text}/>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 45,
        borderBottomColor: 'grey',
        marginVertical: 10,
        borderBottomWidth: 0.5

    }

})
export default Input;