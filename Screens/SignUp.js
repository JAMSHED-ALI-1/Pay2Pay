import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Checkbox, Button, Chip} from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist';
import {useNavigation} from '@react-navigation/native';
import Thems, {commonStyle} from './Thems';
export default function SignUp() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(!checked);
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignup = () => {
    navigation.navigate('SignUp1');
  };

  return (
    <>
      <View style={commonStyle.mainSignUp}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Images/Group545.png')}
            style={{resizeMode: 'contain'}}
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={commonStyle.timeline}>Create Your Account</Text>
          <Text style={commonStyle.textSignup}>
            To get started, we need you to create an account with us. It's a
            quick and straight forward process that will only take a few
            minutes.
          </Text>
        </View>
        <View style={commonStyle.timeLinedata}>
          <View
            style={styles.timeLineItem}>
            <Image
              source={require('../Images/44.png')}
              style={styles.gapTimeline}
            />
            <View style={styles.Timelinedata}>
              <Text style={styles.Timelinedetail}>Create Account</Text>
              <Text>Enter Your Accout Detail</Text>
            </View>
          </View>
          <View
            style={styles.timeLine}>
            <Image
              source={require('../Images/33.png')}
              style={styles.gapTimeline}
            />
            <View style={styles.Timelinedata}>
              <Text style={styles.Timelinedetail}>
                Personal Information
              </Text>
              <Text>Enter Your Persional Information</Text>
            </View>
          </View>
          <View
            style={styles.timeLine}>
            <Image
              source={require('../Images/12.png')}
              style={{position: 'absolute', left: -6}}
            />
            <View style={styles.Timelinedata}>
              <Text style={styles.Timelinedetail}>
                Identity Varification
              </Text>
              <Text>Verify your Identity to protect your account.</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="red"
          />

          <Text>
            By creating an account you agree to our{' '}
            <Text style={commonStyle.termsText}>Terms and Condition </Text>and
            <Text style={commonStyle.policyText}>Privacy Policy.</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (checked) {
                handleSignup();
              }
            }}>
              <Text style={styles.btndata}>Create Account</Text>
            </TouchableOpacity>
        </View>
        {/* <View style={{}}>
          <Button
            mode="contained"
            buttonColor="red"
            contentStyle={{fontSize: 400}}
            style={{height: 50, width: '95%', marginLeft: 10, fontSize: 30}}
            onPress={handleSignup}>
            CREATE ACCOUNT
          </Button>
        </View> */}
        <View style={styles.timeLineText}>
          <Text style={{fontSize: 15, color: '#1f1f1f'}}>
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text style={commonStyle.botmBtn} onPress={handleLogin}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      </View>
    </>
  );
}
styles = StyleSheet.create({
  createbtn1: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    borderRadius: 20,
    textAlign: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    borderRadius: 10,
  },
  btndata:{
  marginVertical:10,
  color:"#fff"
  },
  timeLine: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
    zIndex: -1,
  },
  timeLineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: 'gray',
    borderLeftWidth: 2,
    zIndex: -1,
    borderTopStartRadius: 50,
    borderTopWidth: -3,
  },
  timeLineText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Timelinedata: {
    marginHorizontal: 40,
    marginVertical: 17,
  },
  Timelinedetail: {
    fontSize: 20,
    color: 'black',
  },
  gapTimeline: {
    position: 'absolute',
    left: -6,
  },
});
