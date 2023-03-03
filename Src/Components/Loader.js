import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';

const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: 200,
            height: 200,
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            justifyContent : 'center',
            alignItems : 'center',
            
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
            <ActivityIndicator size={'large'} />
          </View>
      </View>
    </Modal>
  );
};

export default Loader;
