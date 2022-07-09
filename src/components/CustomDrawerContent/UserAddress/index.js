import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserAddress = () => {
  return (
    <View style={styles.container}>
      <Text>UserAddress</Text>
    </View>
  )
}

export default UserAddress

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})