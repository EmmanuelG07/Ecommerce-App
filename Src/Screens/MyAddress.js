import {useNavigation, useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {deleteAddress} from '../redux/action/Action';

const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  // console.log(addressList);

  const dispatch = useDispatch();

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 15}}>
          My Address
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 5,
            marginRight: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.push('AddAddress');
          }}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '96%',
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#8e8e8e',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                margin: 5,
              }}>
              <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{marginLeft: 20}}>{'City: ' + item.city} </Text>
                <Text style={{marginLeft: 20}}>
                  {'Building: ' + item.building}
                </Text>
                <Text style={{marginLeft: 20}}>
                  {'Pincode: ' + item.pincode}
                </Text>
              </View>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => {
                  dispatch(deleteAddress(index));
                }}>
                <MaterialIcons name="delete" size={25} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;
