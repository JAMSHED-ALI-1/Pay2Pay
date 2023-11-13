import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneInputWithFlag = () => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withAlphaFilter
        withCallingCode
        onSelect={onSelectCountry}
      />
      <TextInput
        style={styles.input}
        label="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        mode="outlined"
        keyboardType="phone-pad"
        placeholder="Enter Your Phone Number"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default PhoneInputWithFlag;
