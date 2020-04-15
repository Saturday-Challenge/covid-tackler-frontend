import React from 'react';
import { AsyncStorage } from "react-native";
// import { createStackNavigator } from 'react-navigation-stack'
// import HomeScreen from './Components/Home';
// import LoginScreen from './Components/Login';
// import Navigator from './routes/homeStack';
import Routes from './Router'
import LogedInRoutes from './Router'
export default function App() {
  // AsyncStorage.getItem('email',(err,result)=>{
  // console.log(err,result)
    // if(!err && result!==null){
    return (
      <Routes/>
    )
  // }
  // else{
  //   return (
  //     <LogedInRoutes/>
  //   )
  // }
  // })
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// //   Login: {
// //     screen: LoginScreen
// //   }
// },
// {
//   initialRouteName:"Home"
// });

// const AppContainer = createAppContainer(AppNavigator);
