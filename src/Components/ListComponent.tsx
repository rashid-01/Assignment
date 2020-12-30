import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

export const ListComponent = (props: any) => (
    //@ts-ignore
        <View style={Style.container}>
        <View style={Style.flex2}>
           <Icon name={props.icon} size={30} color={'grey'}/>
        </View>  
            <View style={Style.flex6}>
                <Text style={Style.textStyle}>{props.title}</Text>
                <Text style={Style.mutedText}>{props.date}</Text>
            </View> 
            <View style={Style.flex2}>
            <Text style={Style.textStyle}>{props.amount}</Text>
            <Text style={Style.mutedText}>{props.remaining_amount}</Text>
            </View>  
        </View>
    )

const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row'
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700'
    },
    mutedText: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '300'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    flex2: {
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'
    },
    flex6: {
        flex: 6,
        justifyContent: 'center',
        alignItems:'flex-start'
    }
})