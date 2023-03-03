import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
    const nav = useNavigation();
  const Logout = () => {
    // AsyncStorage.removeItem('EMAIL');
    nav.replace('Login');
  };

  return (
    <View
      style={{
        width: '100%',
        height: 55,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 20,
          color: '#000',
          marginRight: 100,
        }}>
        Ecommerce
      </Text>

      <TouchableOpacity
        style={{
          marginLeft: 80,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
          backgroundColor: 'red',
          borderRadius: 10,
        }}
        onPress={ Logout}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
