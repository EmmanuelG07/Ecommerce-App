import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CardItem = ({item, onAddToCart, onAddWishList}) => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '60%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 15,
          fontWeight: '600',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '600'}}>
          {'Rs.' + item.price}
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 5,
          }}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text>Add to card</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          borderRadius: 20,
          elevation: 5,
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          onAddWishList(item);
        }}>
        <Feather name="heart" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
