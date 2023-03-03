import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CardCart from '../Components/CardCart';
import {useSelector, useDispatch} from 'react-redux';
import {addToWishList, removeFromCart} from '../redux/action/Action';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  // const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  console.log(cartData);

  return (
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CardCart
                item={item}
                onAddWishList={x => {
                  dispatch(addToWishList(x));
                }}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../images/notfound2.png')}
            style={{width: '100%', height: '50%'}}
          />
          <Text>No items Added in Cart!!</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '85%',
              height: 50,
              borderRadius: 10,
              alignSelf: 'center',
              backgroundColor: 'green',
              marginBottom: 70,
            }}
            onPress={() => {
              navigation.push('Buy');
            }}>
            <Text style={{color: '#fff'}}>Buy</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
