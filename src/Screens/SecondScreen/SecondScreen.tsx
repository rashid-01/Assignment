import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { Header } from '../../Components/Header';
import { ListComponent } from '../../Components/ListComponent';
import Spacer from '../../Components/Spacer';

const SecondScreen = () => {
    const [input, setInput] = useState('Enter Something...');
    const onChangeInput = (e:any) => {
        setInput(e.target.value)
    }
    const [listData, setListData] = useState([]);
    // const submitData = () => {
    //     setListData()
    // }
    return (
        <View style={Style.container}>
            <Header headerTitle={'Profile'} />
            {/* <View style={Style.textStyle}>
                <Text>Profile Screen</Text>
            </View> */}
          <View style={Style.flex2}>
            <Spacer size={50} />
            <TextInput
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, color:'#ffffff' }}
                    value={input} onChange={onChangeInput}
            />
            <Spacer size={60} />
            <View style={Style.rowContainer}>
                {/* <Spacer/>
                <ButtonComponent buttonText={'Deposit'} />
                <Spacer size={70}/> */}
                <ButtonComponent buttonText={'Submit'} />
                </View>
            </View> 
            
            <View style={Style.flex8}>
                <Text style={{color:'#ffffff'}}>{input}</Text>
              {/* <ListComponent icon={'arrow-up'} title={'Withdrew'} date={'1 March, 2020'} amount={'-$900.00'} remaining_amount={'$31.32'} /> */}
            <Spacer size={20} />
            </View>     
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:1,
        backgroundColor: '#100F10',
        flexDirection:'column',
        alignItems:'center'
    },
    textStyle: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 22
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
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default SecondScreen;