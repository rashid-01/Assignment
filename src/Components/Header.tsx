import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextComponent } from './TextComponent';

export const Header = (props: any) => {
    return (
        <View style={Style.container}>
            <View style={Style.flex1}>
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name={'menu'} size={30} color={'#ffffff'}/>
                </TouchableOpacity>
            </View>
            <View style={Style.flex9}>
                <TextComponent title={props.headerTitle} titlestyle={Style.titleStyle}/>
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
        alignItems:'flex-start'
    },
    titleStyle: {
        color: '#ffffff',
        fontSize: 22
    }
})