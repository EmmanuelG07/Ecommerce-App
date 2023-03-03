import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CardItem from '../Components/CardItem';
import Header from '../Components/Header';
import {products} from '../Navigations/Products';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishList} from '../redux/action/Action';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshritList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [trousersList, setTrouserList] = useState([]);

  useEffect(() => {
    // console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });

    setCategoryList(tempCategory);
    setTshritList(products.category[0].data);
    setJacketList(products.category[1].data);
    setJeansList(products.category[2].data);
    setShoesList(products.category[3].data);

    setTrouserList(products.category[4].data);
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, marginBottom: 70}}>
        <Header />
        <Image
          source={require('../images/maxresdefault.jpg')}
          style={{
            width: '94%',
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 10,
                  }}>
                  <Text>{item.category} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          New T Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CardItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          New Jackets
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CardItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CardItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          New Trousers
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={trousersList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CardItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={shoesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <CardItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
