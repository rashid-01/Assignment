import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextComponent } from './TextComponent';

export const Header = () => {
    return (
        <View style={Style.container}>
            <View style={Style.flex1}></View>
            <View style={Style.flex9}>
                <TextComponent title={'US Dollar'}/>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000',
        color:'#ffffff'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    flex9: {
        flex: 9,
        justifyContent: 'center',
        alignItems:'center'
    }
})