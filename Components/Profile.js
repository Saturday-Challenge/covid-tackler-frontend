import React, { Component } from 'react'
import { AsyncStorage,Button,Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class componentName extends Component {
  logout(){
    AsyncStorage.removeItem("email")
    Actions.login()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile page </Text>
        <TouchableOpacity>
          <Button title="Logout" onPress = {this.logout}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
  },
  input:{
      borderWidth:1,
      borderColor:"#777",
      padding:8,
      margin:10,
      width:200

  }
})