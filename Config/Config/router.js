import React,{Component} from 'react';
import { createDrawerNavigator, createSwitchNavigator,  createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Register from '../Component/Register';
import Select from '../Component/Select';
import Easy from '../Component/Easy';
import Medium from '../Component/Medium';
import Hard from '../Component/Hard';
import Score from '../Component/Score';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
class navigation extends React.Component {
    render() {
        return (
            <MainNavigator />
        )
    }


}

const tabnav=createMaterialTopTabNavigator({
    Score:
    {
        screen:Score
    }
})
const MainNavigator = createStackNavigator({


    Register: {
        screen: Register
    },
    Select:
    {
        screen:Select
    },

    Score:
    {
        screen:tabnav
    },

    Easy:{
        screen:Easy
    },
    Medium:
    {
        screen:Medium
    },

    Hard:
    {
        screen:Hard

    },
   

});


export default createAppContainer(MainNavigator);