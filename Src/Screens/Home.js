import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state => state);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <AntDesign
            name="home"
            size={25}
            style={{color: selectedTab == 0 ? 'blue' : '#8e8e8e'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <MaterialIcons
            name="search"
            size={25}
            style={{color: selectedTab == 1 ? 'blue' : '#8e8e8e'}}
          />
        </TouchableOpacity>
        <View style={styles.icons}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#000',
              borderRadius: 30,
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: selectedTab == 2 ? '#00425A' : '#3F979B',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedTab(2);
              }}>
              <Feather
                name="shopping-bag"
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                }}
                size={25}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 10,
                  right: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                  }}>
                  {data.Reducers.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <FontAwesome
            name="heart-o"
            size={25}
            style={{color: selectedTab == 3 ? 'blue' : '#8e8e8e'}}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              right: 18,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '600',
              }}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.icons]}
          onPress={() => setSelectedTab(4)}>
          <Ionicons
            name="person-outline"
            size={25}
            style={{color: selectedTab == 4 ? 'blue' : '#8e8e8e'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
