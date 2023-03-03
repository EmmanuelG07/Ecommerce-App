import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import CardCart from '../Components/CardCart';
import {
  addItemToCart,
  removeFromCart,
  removeFromWishList,
} from '../redux/action/Action';

const Wishlist = () => {
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CardCart
              isWishList={'srf'}
              item={item}
              onRemoveFromWishList={() => {
                dispatch(removeFromWishList(index));
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
