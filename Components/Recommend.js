import React, { Component,useState } from 'react'
import { ScrollView,View,Text,TouchableOpacity, StyleSheet, Image } from 'react-native'
import Home from './Home'
import axios from 'axios'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state={
      itemlist: ArrayBuffer,
      isloading:true,
      itemadded:false
    }
    this.addedItem=[]
    this.addedItem;
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
        this.itemid=itemid;
        setTimeout(() => {
          this.itemid=undefined;
          this.state.itemadded=false;
        }, 2000);
    }
    // button.style.backgroundColor = "green"
    
  }
  componentDidMount(){
    console.log('Hi from React Native');
    axios
      .get("https://smartlists.azurewebsites.net/ml/recommend?userid=25")
      .then(res => res.data)
      .then(response=>{
        this.setState({itemlist:response,isloading:false})
      })
      .catch(err => console.error(err));
  }
  render() {
    // var [data,setData]=useState(0);
    // if(this.state.data!==[]){
    const {itemlist,isloading,itemadded} = this.state
    return (
        <>
        <ScrollView style={styles.view}>
        {itemadded && <Text position="top">Item added {this.itemid}</Text>}
        {/* {itemadded && <FlashMessage position="bottom">Item added</FlashMessage>} */}
        {/* {isloading && <Image 
          source={{uri: "./../assets/loader.gif"}}
          style={{width: 200, height: 200}}
          style={styles.loader}
        ></Image> */}
        {isloading && <Text>Loading...</Text>}
        {!isloading && itemlist.length!==0 && (
          itemlist.map((item, index) => (
            <Card>
              <Card.Title title={item.item_name} subtitle={item.item_category} left={(props) => <Avatar.Icon {...props} icon="image" />}/>
              <Card.Content>
                <Card.Actions>
                <Button title={item.itemid} onPress={(event)=>{this.addItem(event,item.itemid)}}>Add to List</Button>
                </Card.Actions>
              </Card.Content>
            </Card>
        ))
        )
       }
       {!isloading && itemlist.length===0 && <Text>No item recommended</Text>}
    </ScrollView>
      {/* <ScrollView style={{marginBottom:60,marginLeft:5,marginRight:5}}>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        </Card.Actions>
    </Card>
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        </Card.Actions>
    </Card>
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
        <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        </Card.Actions>
    </Card>
      </ScrollView> */}
      <Home/>
      </>
    )
  // }
  //   else{
  //     return(
  //       <>
  //       </>
  //     )
  //   }
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
  }
})