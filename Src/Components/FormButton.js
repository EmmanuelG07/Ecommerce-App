import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const FormButton = ({onPress, title, bgColor,textColor, disabled}) => {
  return (
    <View>
      <TouchableOpacity style={{
        backgroundColor : bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 50,
      }} 
      
      onPress={() => {
        onPress();
      }}
      disabled={disabled}
      >
      <Text style={{color: textColor}} >{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormButton


