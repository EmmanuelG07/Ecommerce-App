import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardCart = ({
  item,
  onRemoveItem,
  onAddWishList,
  isWishList,
  onRemoveFromWishList,
  onAddToCart,
  
}) => {
  return (
    <TouchableOpacity
      style={{
        width: '94%',
        borderRadius: 20,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 140,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
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
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>
            {'Rs.' + item.price}
          </Text>

          {isWishList ? (
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
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          ) : (
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
                onRemoveItem(item);
              }}>
              <Text>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>

        {isWishList ? (
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
              onRemoveFromWishList();
            }}>
            <AntDesign name="heart" size={25} color="red" />
          </TouchableOpacity>
        ) : (
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
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardCart;
