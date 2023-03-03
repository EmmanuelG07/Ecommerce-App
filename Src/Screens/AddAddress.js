import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/action/Action';

const AddAddress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');

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
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="ios-arrow-back-circle-outline" size={40} />
        </TouchableOpacity>
      </View>
      <FormInput
        value={city}
        placeholder={'Enter City Name'}
        icon={require('../images/city.png')}
        onChangeText={txt => {
          setCity(txt);
        }}
      />
      <FormInput
        value={building}
        placeholder={'Enter building Name'}
        icon={require('../images/greens.png')}
        onChangeText={txt => {
          setBuilding(txt);
        }}
      />

      <FormInput
        value={pin}
        placeholder={'Enter Pincode'}
        keyboardType={'number-pad'}
        icon={require('../images/location.png')}
        onChangeText={txt => {
          setPin(txt);
        }}
      />


      

      <FormButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (city !== '' && building !== '' && pin !== '') {
            dispatch(
              addAddress({city: city, building: building, pincode: pin}),
            );

            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

export default AddAddress;
