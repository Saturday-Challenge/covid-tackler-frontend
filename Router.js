import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import {BottomNav} from './Components/BottomNav'
import Automate from './Components/Automate'
import Recommend from './Components/Recommend'
import NewList from './Components/NewList'
import NewItem from './Components/NewItem'
const Routes = () => {
   const TabIcon = ({ selected, title }) => {
      return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
      );
    }
   return (
      <Router>
         <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" navBar={Navbar}/>
            <Scene key = "profile" component = {Profile} title = "Profile" tabs={true} navBar={Navbar}/>
            <Scene key = "login" component = {Login} title = "Login" initial = {true}/>
            <Scene key = "automate" component = {Automate} title = "Automate" tabs={true} navBar={Navbar}/>
            <Scene key = "recommend" component = {Recommend} title = "Recommend" navBar={Navbar}/>
            <Scene key = "newlist" component = {NewList} title = "NewList" navBar={Navbar}/>
            <Scene key = "newitem" component = {NewItem} title = "NewItem" navBar={Navbar}/>
         </Scene>
      </Router>
   )
}
export default Routes