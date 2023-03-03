import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import {useSelector} from 'react-redux';
import FormButton from '../Components/FormButton';
import { useNavigation } from '@react-navigation/native';

const Buy = () => {
  const cartData = useSelector(state => state.Reducers);
  const addressList = useSelector(state => state.AddressReducers);
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();


  

  const getTotal = () => {
    var tempTotal = 0;

    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 70,
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 70, height: 70, marginLeft: 10}}
                />
                <View style={{padding: 10}}>
                  <Text style={{fontSize: 18}}>{item.name} </Text>
                  <Text style={{marginTop: 15}}>{'Rs.' + item.price} </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          margin: 10,
          borderWidth: 0.5,
          borderRadius: 10,
        }}>
        <Text>Total:</Text>
        <Text>{'Rs.' + getTotal()} </Text>
      </View>

      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>Select Address</Text>
      </View>
      {addressList.length > 0 ? (
        <View>
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
                    <Text style={{marginLeft: 20}}>
                      {'City: ' + item.city}{' '}
                    </Text>
                    <Text style={{marginLeft: 20}}>
                      {'Building: ' + item.building}
                    </Text>
                    <Text style={{marginLeft: 20}}>
                      {'Pincode: ' + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      marginRight: 20,
                      borderWidth: 0.5,
                      padding: 5,
                      borderRadius: 5,
                    }}
                    onPress={() => {
                      setSelected(
                        `City: ${item.city}, Building: ${item.building},  Pincode: ${item.pincode}`,
                      );
                    }}>
                    <Text>Select</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={{
              margin: 20,
              borderWidth: 0.5,
              width: '38%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: 'blue'
            }}
            onPress={()=>{
              navigation.push('AddAddress')
            }}
            >
            <Text style={{color: '#fff'}}>Add Address</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={{marginLeft: 20, fontSize: 18, fontWeight: '600'}}>
        Selected Address
      </Text>
      <Text style={{marginLeft: 20, fontSize: 16, marginTop: 10}}>
        {selected == '' ? 'Please Select Address from Above List' : selected}
      </Text>

      <FormButton
        title={'Place Order'}
        bgColor={'red'}
        textColor={'#fff'}
        onPress={() => {
         navigation.push('OrderPlaced')
        }}
      />
    </View>
  );
};

export default Buy;
