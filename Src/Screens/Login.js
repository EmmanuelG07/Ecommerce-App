import React, {useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);

        setBadPassword(true);
      } else {
        
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
       
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail, mPass);
    if (email === mEmail && mPass === password) {
      setModalVisible(false);

      navigation.navigate('Home');
    } else {
      setModalVisible(false);
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#F8F4EA'}}>
        <Image
          source={require('../images/playstore.png')}
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            marginTop: 100,
            borderRadius: 100,
          }}
        />

        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: '600',
            color: '#000',
          }}>
          Login
        </Text>

        <FormInput
          placeholder={'Email'}
          icon={require('../images/email.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text style={{marginTop: 10, marginLeft: 33, color: 'red'}}>
            Please Enter Email Id
          </Text>
        )}

        <FormInput
          placeholder={'Password'}
          icon={require('../images/padlock.png')}
          type={'password'}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 33, color: 'red'}}>
            Please Enter Password Id
          </Text>
        )}

        <FormButton
          title={'Login'}
          bgColor={'#000'}
          textColor={'#fff'}
          onPress={() => {
            login();
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Create New Account?
        </Text>
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
    </ScrollView>
  );
};

export default Login;
