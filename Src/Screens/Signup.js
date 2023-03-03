import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badName, setBadName] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badMobile, setBadMobile] = useState(false);
  const [badconfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signup = () => {
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    if (
      badName == false &&
      badPassword == false &&
      badEmail == false &&
      badMobile == false &&
      badconfirmPassword == false
    ) {
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('PASSWORD', password);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('MOBILE', mobile);
      navigation.goBack();
      console.log('yes');
    }
  };

  return (
    <ScrollView style={{flex: 1} }>
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
          Create New Account
        </Text>

        <FormInput
          placeholder={'Name'}
          icon={require('../images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        {badName === true && (
          <Text style={{marginTop: 10, marginLeft: 33, color: 'red'}}>
            Please Enter Name
          </Text>
        )}
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
            Please Enter Name
          </Text>
        )}
        <FormInput
          placeholder={'Mobile'}
          icon={require('../images/phone-call.png')}
          value={mobile}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
          }}
        />
        {badMobile === true && (
          <Text style={{marginTop: 10, marginLeft: 33, color: 'red'}}>
            Please Enter Mobile Number
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
            Please Enter password
          </Text>
        )}

        <FormInput
          placeholder={'Confirm Password'}
          icon={require('../images/padlock.png')}
          type={'password'}
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
        />
        {badconfirmPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 33, color: 'red'}}>
            Please Enter correct Password
          </Text>
        )}

        <FormButton
          title={'Signup'}
          bgColor={buttonDisabled ? '#8e8e8e' : '#000'}
          textColor={'#fff'}
          onPress={() => {
            signup();
          }}
          disabled={buttonDisabled}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have An Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
