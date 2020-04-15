import React, { Component } from 'react'
import { Button,Text, View,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Home from './Home'
export default class AddItem extends Component {
    
    constructor(props){
        super(props)
        this.state={
            itemlist:[],
            itemName:"",
            itemCategory:"",
            Quantity:0
        }
    }
    additem(){
        var {itemlist,itemCategory,itemName,Quantity} = this.state
        itemlist.push({itemName,itemCategory,Quantity})
    }
    handleQuantity(text){
        var {itemlist,itemCategory,itemName} = this.state
        console.log(text)
        this.setState({itemlist,itemName,Quantity:text,itemCategory})
    }
    handleCategory(text){
        var {itemlist,Quantity,itemName} = this.state
        console.log(text)
        this.setState({itemlist,itemName,Quantity,itemCategory:text})
    }
    handleName(text){
        var {itemlist,itemCategory,Quantity} = this.state
        console.log(text)
        this.setState({itemlist,itemName:text,Quantity,itemCategory})
    }
  render() {
    return (
        <View style={styles.container}>
        <Text>Add new item to shopping list:</Text>
      <TextInput
      placeholder="item name"
      label='name'
      style={styles.input}
      onChangeText = {this.handleName}
      />
      <TextInput
      placeholder="item category"
      label='category'
      style={styles.input}
      onChangeText = {this.handleCategory}
      />
      <TextInput
      placeholder="quantity"
      label='quantity'
      style={styles.input}
      onChangeText = {this.handleQuantity}
      />
    <TouchableOpacity >
        <Button title="Add" onPress = {this.additem}/>
    </TouchableOpacity>
   <Home/>
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