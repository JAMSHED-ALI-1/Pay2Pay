import {
  View,
  Text,
  text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {commonStyle} from './Thems';
import CountryPicker from 'react-native-country-picker-modal';
import {ViewPropTypes} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const [select, setselect] = useState(1);
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [visible, setVisible] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState('eye-off');
  const navigation = useNavigation();
  const handleSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .matches(/^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required('email is required'),
  });
  const handlelogin = () => {
    if (select === 1) {
      console.log('Email', email);
    } else if (select === 2) {
      console.log('phone');
    }
  };
  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    setphone(`+${country.callingCode}`);
  };

  const handleShowPassword = () => {
    if (showPassword === 'eye') {
      setShowPassword('eye-off');
    } else {
      setShowPassword('eye');
    }
    setVisible(!visible);
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
   
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={commonStyle.main}>
              <View style={commonStyle.header}>
                <Image
                  source={require('../Images/Group545.png')}
                  style={commonStyle.imghead}
                />
                <View style={commonStyle.header1}>
                  <Text style={commonStyle.font}> Welcome Back</Text>
                  <Text>Sign In to continue</Text>
                </View>
                <View style={commonStyle.toglebtn}>
                  <Button
                    mode="contained"
                    buttonColor={select == 1 ? 'red' : '#FEF4F5'}
                    dark={true}
                    textColor={select == 1 ? '#FEF4F5' : 'black'}
                    onPress={() => {
                      setselect(1);
                    }}
                    // style={select == 1  ? commonStyle.btn1 : commonStyle.btn2}
                  >
                    Email
                  </Button>

                  <Button
                    mode="contained"
                    buttonColor={select === 2 ? 'red' : '#FEF4F5'}
                    dark={true}
                    onPress={() => {
                      setselect(2);
                    }}
                    textColor={select == 2 ? 'white' : 'black'}
                    // style={select == 2 ? commonStyle.btn1 : commonStyle.btn2}
                  >
                    Phone
                  </Button>
                </View>
              </View>
              <View style={commonStyle.textInput}>
                {select === 1 && (
                  <TextInput
                    label="Email"
                    // value={email}
                    value={text}
                    onChangeText={text}
                    // error={!!errors.email}
                    mode="outlined"
                    // right={<TextInput.Icon icon="eye-off" />}
                    left={<TextInput.Icon icon="email" color="#EC1F24" />}
                    outlineColor="#808080"
                    outlineStyle={{borderRadius: 10}}
                    activeOutlineColor="red"
                    placeholder="Enter Your E-mail"
                    style={(borderRadius = 50)}
                  />
                )}
               

                {select === 2 && (
                  <View style={styles.headcountry}>
                    <View style={styles.countrypicker}>
                      <CountryPicker
                        countryCode={countryCode}
                        // style={{width:'40%'}}
                        // withflag
                        withfilter
                        // withalphafilter
                        withcallingcode
                        // value={phone}
                        // offset={5}
                        onSelect={onSelectCountry}
                      />
                      <Text style={{}}>{phone}</Text>
                    </View>
                    <View>
                      <TextInput
                        label="Phone"
                        //  value={phone}
                        //  onChangeText={text => setphone(text)}
                        mode="outlined"
                        // right={<TextInput.Icon icon="eye" />}
                        // left={<TextInput.Icon icon="phone" color={'#EC1F24'} />}
                        outlineStyle={{borderRadius: 10}}
                        outlineColor="#808080"
                        keyboardType="phone-pad"
                        activeOutlineColor="red"
                        placeholder="Enter Your Phone Number"
                        style={{width: 250}}
                      />
                    </View>

                    {/* <TextInput
                  // label="Phone"
                  // value={phone}
                  // onChangeText={text => setphone(text)}
                  mode="outlined"
                  // right={<TextInput.Icon icon="eye" />}
                  // left={<TextInput.Icon icon="phone" color={'#EC1F24'} />}
                  // outlineStyle={{borderRadius: 10}}
                  // outlineColor="#808080"
                  keyboardType="phone-pad"
                  // activeOutlineColor="red"
                  // placeholder="Enter Your Phone Number"
                /> */}
                  </View>
                )}
                <TextInput
                  label="Password"
                  secureTextEntry={visible}
                  value={text}
                  mode="outlined"
                  right={
                    <TextInput.Icon
                      icon={showPassword}
                      onPress={handleShowPassword}
                    />
                  }
                  left={<TextInput.Icon icon="key" color="#EC1F24" />}
                  outlineStyle={{borderRadius: 10}}
                  outlineColor="#808080"
                  activeOutlineColor="red"
                  placeholder="Password"
                  // width={40}
                />
                <TouchableOpacity>
                  <Text style={commonStyle.forgetpass}>Forget Password?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.loginbtn} onPress={handlelogin}>
                <Text style={{color: '#fff', fontSize: 17}}>Login</Text>
              </TouchableOpacity>
              <View style={commonStyle.Bottom}>
                <Text style={commonStyle.fontbottom}>
                  Don't have an account?
                </Text>
                {/* <Button
          mode="text"
          textColor="red"
          style={{height: 40}}
          onPress={handleSignUp}>
          SignUp
        </Button> */}
                <TouchableOpacity>
                  <Text style={commonStyle.botmBtn} onPress={handleSignUp}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
              <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      

  );
}
const styles = StyleSheet.create({
  loginbtn: {
    backgroundColor: 'red',
    width: '92%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  container: {
    flexGrow: 1,
  },
  countrypicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 50,
    width: 60,
    gap: -15,
  },
  headcountry: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
