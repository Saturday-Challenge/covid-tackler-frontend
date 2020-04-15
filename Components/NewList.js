import React, { Component } from 'react'
import { View,TouchableOpacity, Text,StyleSheet } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'
import Home from './Home'
export default class componentName extends Component {
  render() {
    return (
        <>
            <Text>Create new shooping list</Text>
            <TouchableOpacity
                style={[styles.touchable,styles.buttonCallout]}
                onPress={() => Actions.newitem()}
              >
                <Button style={styles.touchableText}>+</Button>
              </TouchableOpacity>
            <Home/>
        </>
    )
  }
}

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    loader:{
      width: 200,
      height: 200,
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center",
    },
    view:{
      marginBottom:60
    },
    text: {
       color: '#4f603c'
    },
    buttonCallout: {
      flex: 1,
      flexDirection:'row',
      position:'absolute',
      bottom:60,
      alignSelf: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      borderWidth: 0.5,
      borderRadius: 20
    }
  })