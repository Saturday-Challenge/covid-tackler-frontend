import React, { Component } from 'react'
import { ScrollView,Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import Home from './Home'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FlashMessage from "react-native-flash-message"
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state={
      itemlist: ArrayBuffer,
      isloading:true,
      itemadded:false
    }
    this.addedItem=[]
  }
  componentDidMount(){
    console.log('Hi from React Native');
    axios
      .get("https://smartlists.azurewebsites.net/ml/predict?userid=25")
      .then(res => res.data)
      .then(response=>{
        this.setState({itemlist:response,isloading:false})
      })
      .catch(err => console.error(err));
  }
  addItem(button,itemid){
    var flag=false
    if(this.addedItem.length!==0){
    for(let element of this.addedItem) {
      if(element===itemid){
        flag=true
      }
      }
    }
    if(flag==false || this.addedItem.length==0){
        console.log("for",itemid,"change card color to green")
        console.log(this.addedItem)
        this.addedItem.push(itemid)
        console.log(this.addedItem)
        this.state.itemadded=true;
        setTimeout(() => {
          this.state.itemadded=false;
        }, 1000);
    }
    // button.style.backgroundColor = "green"
    
  }
  render() {
    const {itemlist,isloading,itemadded} = this.state
    return (
        <>
          <ScrollView style={styles.view}>
            {itemadded && <Text>Item Added</Text>}
            {/* {itemadded && <FlashMessage position="bottom">Item added</FlashMessage>} */}
            {isloading && <Text>Loading...</Text>}
            {/* {isloading && <Image 
              source={{uri: "./../assets/loader.gif"}}
              style={{width: 200, height: 200}}
              style={styles.loader}
            ></Image>
            } */}
            {!isloading && itemlist.length!==0 && (
              itemlist.map((item, index) => (
                <Card>
                  <Card.Title title={item.item_name} subtitle={item.item_category} left={(props) => <Avatar.Icon {...props} icon="image" />}/>
                  <Card.Content>
                    <Paragraph>{item.quantity}</Paragraph>
                    <Card.Actions>
                    <Button title={item.itemid} onPress={(event)=>{this.addItem(event,item.itemid)}}>Add to List</Button>
                    </Card.Actions>
                  </Card.Content>
                </Card>
            ))
            )
            }
            {!isloading && itemlist.length===0 && <Text>No need to go for shopping</Text>}
              
          </ScrollView>
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