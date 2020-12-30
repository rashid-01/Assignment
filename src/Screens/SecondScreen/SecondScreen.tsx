import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { Header } from '../../Components/Header';
import { ListComponent } from '../../Components/ListComponent';
import Spacer from '../../Components/Spacer';
import { TextComponent } from '../../Components/TextComponent';

const SecondScreen = () => {
    return (
        <SafeAreaView style={Style.container}>
          <View style={Style.flex2}>
            <Spacer size={50} />
            <Text style={Style.titleStyle}>$31.32</Text>
            <Spacer size={2} />
            <Text style={Style.mutedText}>$31.32</Text>
            <Spacer size={30} />
            <View style={Style.rowContainer}>
                <Spacer/>
                <ButtonComponent buttonText={'Deposit'} />
                <Spacer size={70}/>
                <ButtonComponent buttonText={'Withdraw'} />
                </View>
            </View> 
            
            <View style={Style.flex8}>
              <ListComponent icon={'arrow-up'} title={'Withdrew'} date={'1 March, 2020'} amount={'-$900.00'} remaining_amount={'$31.32'} />
                <Spacer size={20} />
                
            </View>    
            
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:1,
        backgroundColor: '#000000',
        flexDirection:'column',
        alignItems:'center'
    },
    flex2: {
        flex: 2,
        flexDirection:'column',
        alignItems:'center'
    },
    flex1: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center'
    },
    flex8: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: '700',
        color:'#ffffff'
    },
    mutedText: {
        fontSize: 18,
        fontWeight: '400',
        color:'#aeaeae'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    }
})

export default SecondScreen;