import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function FrontPage() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    // <LinearGradient
    //   colors={['#4c669f', '#3b5998', '#192f6a']}>
    //   <Text>Sign in with Facebook</Text>
    // </LinearGradient>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../Images/Vector.png')}
        resizeMode="contain"
        style={{width: 200, height: 200}}
      />
      <Text style={{color: '#EC1F25', fontSize: 30}}>PAY2P</Text>
    </View>
  );
}
