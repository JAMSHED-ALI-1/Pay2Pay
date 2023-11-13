import {View, Text} from 'react-native';
import React from 'react';
import {TextInput,Button} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function Validation() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required('Required'),
  });

  const handleSubmit = values => {
    // Handle form submission here
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        <View>
          <Text>Validation</Text>
          <TextInput
            mode="outlined"
            label="Name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Enter Your Name"
          />
          {touched.name && errors.name && (
            <Text style={{color: 'red'}}>{errors.name}</Text>
          )}
          {/* You can show different validation messages for other form fields similarly */}
          {/* <Button onPress={handleSubmit}>Submit</Button> */}
        </View>
      )}
    </Formik>
  );
}
