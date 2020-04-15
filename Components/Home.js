import React, { Component } from 'react'
import { TouchableOpacity, Text,Button, View,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
const automate = () => {
   Actions.automate()
}
const recommend = () => {
   Actions.recommend()
}
const makeList = () => {
   Actions.newlist()
}


export default class Home extends Component {
  render() {
   return (
      <>
      {/* <hr/> */}
      <View style={styles.container}>
         <View style={styles.buttonContainer}>
            <TouchableOpacity
               style={styles.button}
               onPress={automate}
            >
            <Image
            source={{uri:"https://cdn.iconscout.com/icon/premium/png-512-thumb/shopping-list-9-622201.png"}}
            style={{width: 20, height: 20}}
            /><Text> Automate </Text>
          </TouchableOpacity>
         </View>
         <View style={styles.buttonContainer}>
         <TouchableOpacity
               style={styles.button}
               onPress={makeList}
            >
            <Image
            source={{uri:"https://cdn4.iconfinder.com/data/icons/employment-pixel-prefect-set-2/80/list__edit__create__document_-512.png"}}
            style={{width: 20, height: 20}}
            /><Text> New List </Text>
          </TouchableOpacity>
         </View>
         <View style={styles.buttonContainer}>
         <TouchableOpacity
               style={styles.button}
               onPress={recommend}
            >
            <Image
            source={{uri:"https://cdn1.iconfinder.com/data/icons/navigation-icon/128/check-512.png"}}
            style={{width: 20, height: 20}}
            /><Text> Recommend </Text>
          </TouchableOpacity>
         </View>
      </View>
      </>
      )
  }
}

const styles={
   container:{
      flex: -1,
      position: 'absolute',
      bottom:0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop:"1 black solid"

   },
   buttonContainer: {
      flex: 1,
      postion:"fixed",
      botoom:0,
      justifyContent: 'flex-end',
      marginBottom: 0
    },
    button: {
      alignItems: 'center',
      theme:"dark",
      // backgroundColor: '#DDDDDD',
      color:"red",
      padding: 10
    }
}