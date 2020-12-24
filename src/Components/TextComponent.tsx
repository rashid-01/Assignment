import React from 'react';
import { Text } from 'react-native';

export const TextComponent = (props:any) => {
    return (
        <Text>{props.text}</Text>
    )
}