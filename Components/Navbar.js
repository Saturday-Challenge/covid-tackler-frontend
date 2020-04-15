// import React, { Component } from 'react'
// import { Text, View,Image } from 'react-native'
// import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
// import NavigationBar from 'react-native-navbar';
// import { Actions } from 'react-native-router-flux'
// export default class componentName extends Component {
//   render() {
//     return (
//       <View>
//         <NavigationBar
//         title={titleConfig}
//         rightButton={rightButtonConfig}
//         tintColor = "#fff"
//       />
//       </View>
//     )
//   }
// }
// const styles = {
//   container: {
//     flex: 1,
//   },
// };

// const rightButtonConfig = {
//   title: <Image
//   style={{width: 40, height: 40, borderRadius: 40 / 2 }}
//   source={{uri: 'data:image/jpeg;base64,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'}}/>,
//   handler: () => Actions.profile(),
// };

// const titleConfig = {
//   title: 'Smart List'
// };
import React, {Component} from 'react';
import {BackHandler, TouchableOpacity, View,Image} from 'react-native'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux'

const styles = {
  statusBar: {
    backgroundColor: '#000',
  },
  navBar: {
    backgroundColor: '#212121',
  },
  title: {
    color: '#fff',
  },
  buttonText: {
    color: '#b5b5b5',
  },
}
const profileIcon= {
  handler: () => Actions.profile(),
}
export default class NavBarIOSDark extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}
handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}
  render() {
    return (
      <NavBar style={styles}
        statusBar={{ barStyle: 'light-content' }}
      >
        <NavButton>
        <View>
        <TouchableOpacity onPress={this.handleBackButtonClick}>
            <Icons name={'arrow-back'} size={30} color='#fff' style={{marginLeft: '3%'}}/>
        </TouchableOpacity>
        </View>
        </NavButton>
        <NavTitle style={styles.title}>
        <Image 
            source={{ uri: 'https://ak7.picdn.net/shutterstock/videos/1022321827/thumb/7.jpg'}} 
            style={{width: 30, height: 30, borderRadius: 30/ 2}} 
        /> {"Smart List"}
        </NavTitle>
        <NavButton onPress={profileIcon.handler}>
        <Image 
            source={{ uri: 'https://avatars1.githubusercontent.com/u/32647423?s=460&v=4'}} 
            style={{width: 50, height: 50, borderRadius: 50/ 2}} 
        />
        </NavButton>
      </NavBar>
    )
  }
}