import React, {Component} from 'react';
import BottomNavigation, {Tab} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';


export default class BottomNav extends Component {
    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{
                    height: 56,
                    elevation: 8,
                    position: 'absolute',
                    left: 0,
                    bottom: 30,
                    right: 0
                }}
                onTabChange={(newTabIndex) => Actions.drawerMenu({newTabIndex : newTabIndex})} //tabNavigating(newTabIndex)}
            >
                <Tab
                    barBackgroundColor="#203E39"
                    label="Home"
                    icon={<Icon size={24} color="white" name="home" />}
                />
                <Tab
                    barBackgroundColor="#203E39"
                    label="Chat"
                    icon={<Icon size={24} color="white" name="chat" />}
                />
                <Tab
                    barBackgroundColor="#203E39"
                    label="Account"
                    icon={<Icon size={24} color="white" name="supervisor-account" />}
                />
                <Tab
                    barBackgroundColor="#203E39"
                    label="Log-Out"
                    icon={<Icon size={24} color="white" name="power-settings-new" />}
                />
            </BottomNavigation>
        );
    }
}