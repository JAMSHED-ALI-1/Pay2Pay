import {
  View,
  Text,
  text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
// import {StatusBar} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Signup1, signUp1} from './Thems';
import {commonStyle} from './Thems';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Login from './Login';

// const navigation=useNavigation();
export default function SignUp1() {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState('eye-off');
  const [isChecked, setIsChecked] = useState(false);
  const [validPicker, setValidpicker] = useState(false);
  const [selectedDate, setSelecteddate] = useState(false);
  const showDatePicker = () => {
    setValidpicker(true);
  };

  const hideDatePicker = () => {
    setValidpicker(false);
  };

  const handleConfirm = date => {
    const currentdate = new Date();
    if (date > currentdate) {
      hideDatePicker();
      return;
      console.log('hi');
    }
    console.warn('A date has been picked: ', date);
    const formattedDate = date.toISOString().split('T')[0];
    setSelecteddate(formattedDate);
    hideDatePicker();
  };
  const handlelogin = () => {
    navigation.navigate('Login');
  };
  const handleEye = () => {
    if (show === 'eye-off') {
      setShow('eye');
    } else {
      setShow('eye-off');
    }
    setVisible(!visible);
  };
  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate(Login);
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <Appbar.Header>
            <Appbar.BackAction onPress={handleSignup} />
            <Appbar.Content title="Create Account" style={signUp1.header} />
          </Appbar.Header>

          <Text style={signUp1.texthead}>
            Fill your details to create your account.
          </Text>
          <View style={commonStyle.textInput}>
            <TextInput
              label="Name"
              value={text}
              // onChangeText={text => setphone(text)}
              mode="outlined"
              // right={<TextInput.Icon icon="eye" />}
              left={
                <TextInput.Icon
                  icon="human"
                  color={'#EC1F24'}
                  style={styles.TextItem}
                />
              }
              outlineStyle={{borderRadius: 10}}
              outlineColor="#808080"
              activeOutlineColor="red"
              placeholder="Enter Your Name"
            />
            <TextInput
              label="E-mail"
              value={text}
              mode="outlined"
              left={
                <TextInput.Icon
                  icon="email"
                  color={'#EC1F24'}
                  style={styles.TextItem}
                />
              }
              outlineStyle={{borderRadius: 10}}
              outlineColor="#808080"
              activeOutlineColor="red"
              placeholder="Enter Your Email"
            />
            <TextInput
              label="Phone"
              value={text}
              mode="outlined"
              keyboardType="phone-pad"
              left={
                <TextInput.Icon
                  icon="phone"
                  color={'#EC1F24'}
                  style={styles.TextItem}
                />
              }
              outlineStyle={{borderRadius: 10}}
              outlineColor="#808080"
              activeOutlineColor="red"
              placeholder="Please Enter Password"
            />
            <View>
              <TextInput
                label="DOB"
                value={selectedDate}
                mode="outlined"
                left={
                  <TextInput.Icon
                    icon="calendar"
                    color={'#EC1F24'}
                    style={styles.TextItem}
                    onPress={showDatePicker}
                    placeholder="Enter Your DateOf Birth"
                  />
                }
                outlineStyle={{borderRadius: 10}}
                outlineColor="#808080"
                activeOutlineColor="red"
                // disabled
                editable={false}
              />
              <DateTimePickerModal
                isVisible={validPicker}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <TextInput
              label="Password"
              value={text}
              mode="outlined"
              secureTextEntry={visible}
              left={
                <TextInput.Icon
                  icon="key"
                  color={'#EC1F24'}
                  style={styles.TextItem}
                  onPress={handleEye}
                />
              }
              right={<TextInput.Icon icon={show} onPress={handleEye} />}
              outlineStyle={{borderRadius: 10}}
              outlineColor="#808080"
              activeOutlineColor="red"
              placeholder="New Password"
            />
            <TextInput
              label="Conform Password"
              value={text}
              mode="outlined"
              secureTextEntry={visible}
              left={
                <TextInput.Icon
                  icon="key"
                  color={'#EC1F24'}
                  style={styles.TextItem}
                />
              }
              right={<TextInput.Icon icon={show} onPress={handleEye} />}
              outlineStyle={{borderRadius: 10}}
              outlineColor="#808080"
              activeOutlineColor="red"
              placeholder="Conform Password"
            />
            <TouchableOpacity>
              <Text style={styles.createBtn}>Create Account </Text>
            </TouchableOpacity>
            {/* <View style={{}}>
          <Button
            mode="contained"
            buttonColor="red"
            contentStyle={{fontSize: 400}}
            style={commonStyle.loginbtn}
            onPress={() => console.log('Pressed')}>
            LOGIN:
          </Button>
        </View> */}
          </View>
          <View style={styles.Bottom}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.btn} onPress={handlelogin}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  TextItem: {
    borderRightColor: 'grey',
    borderRightWidth: 2,
    borderRadius: 0,
  },
  createBtn: {
    backgroundColor: 'red',
    height: 50,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  touchable: {
    borderRadius: 10,
  },
  Bottom: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: 15,
    color: '#1f1f1f',
    marginVertical: 30,
  },
  btn: {
    color: 'red',
    marginVertical: 30,
  },
});
