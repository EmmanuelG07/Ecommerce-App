
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const FormInput = ({value, onChangeText, placeholder, icon, type, keyboardType}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
      }}>
      <Image source={icon} style={{width: 24, height: 24}} />
      <TextInput
        value={value}
        keyboardType={keyboardType}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={{marginLeft: 10}}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

export default FormInput;