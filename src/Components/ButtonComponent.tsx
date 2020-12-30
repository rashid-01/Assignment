import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const ButtonComponent = (props:any) => {
    return (
        <TouchableOpacity style={buttonStyle.button}>
            <Text style={buttonStyle.textColor}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff',
        width: 180,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textColor: {
        color: '#000000',
        fontSize: 24,
        fontWeight:'700'
    }
})