import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';

const OrderPlaced = () => {
  const cartData = useSelector(state => state.Reducers);

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
                <View style={{padding: 10, justifyContent: 'center'}}>
                  <Text style={{fontSize: 18}}>{item.name} </Text>
                 
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 70,
        }}>
        <Text style={{color: '#000', fontSize: 18}}>
          Your Order has Been Placed!!
        </Text>
      </View>
    </View>
  );
};

export default OrderPlaced;
