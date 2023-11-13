import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Appbar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CodeInput from 'react-native-code-input';
import Modal from 'react-native-modal'

export default function Otpscreen() {
  const navigation = useNavigation();
  const [ismodalVisible, setmodalvisible] = useState(false);
  const togle = () => {
    setmodalvisible(!ismodalVisible);
  };

  const handleSignup1 = () => {
    navigation.navigate('SignUp1');
  };
  const onclicked1 = code => {
    console.log('hi');
  };
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleSignup1} />
        <Appbar.Content title="Security Verification" style={{}} />
      </Appbar.Header>

      <Text
        style={{
          textAlign: 'center',
          lineHeight: 20,
          fontWeight: '600',
          margin: 30,
          fontSize: 15,
        }}>
        Please enter the 6 digit verification code that was sent to
        abc@gmail.com. The code is valid for 1 minute.
      </Text>
      <View style={{height:"60%",}}>
        <CodeInput
          // ref="codeInputRef2"
          secureTextEntry={false}
          activeColor="rgba(49, 180, 4, 1)"
          inactiveColor="rgba(49, 180, 4, 1.3)"
          autoFocus={false}
          inputPosition="center"
          keyboardnputtype="phone-type"
          size={50}
          onFulfill={togle}
          containerStyle={{marginTop: 30}}
          codeInputStyle={{borderWidth: 1.5}}
        />
       
      </View>
      <TouchableOpacity style={styles.submitbtn}>
        <Text style={{color:'#fff',fontSize:16}}>SUBMIT</Text>
      </TouchableOpacity>
      {/* {modal} */}
      <Modal
        isVisible={ismodalVisible}>
            <View style={{flex:1}}>
                <Text>Invalid CodeInput</Text>
                <TouchableOpacity style={styles.modal} onPress={togle}>
                    <Text>Hied Modal</Text>
                </TouchableOpacity>
            </View>
      </Modal>
    </View>
  );
}
const styles=StyleSheet.create({
    submitbtn:{
        backgroundColor:'red',
        alignItems:"center",
        width:"90%",height:50,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:10
    },
    modal:{
backgroundColor:'red',
height:50,
alignItems:'center',
width:"90%",
borderRadius:10,
justifyContent:'center',
alignSelf:"center"
    }
})
