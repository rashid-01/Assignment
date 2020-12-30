import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TextComponent = (props:any) => {
    return (
        props.title ? <Text style={props.titlestyle}>{props.title}</Text> : <Text style={props.textStyle}>{props.title}</Text>
    )
}