import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

let name = '';

const Profile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
          
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="setting" size={25} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../images/user.png')}
        style={{width: 80, height: 80, alignSelf: 'center', marginTop: 30}}
      />
      <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 18}}>
        {name}
      </Text>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 3,
          marginTop: 40,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.push('MyAddress');
        }}>
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 3,

          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 3,

          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
