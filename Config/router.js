import React,{Component} from 'react';
import { createDrawerNavigator, createMaterialTopTabNavigator, createSwitchNavigator,  createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack'
import Register from '../Component/Register';
import Select from '../Component/Select';
import Easy from '../Component/Easy';
import Medium from '../Component/Medium';
import Hard from '../Component/Hard';
import Score from '../Component/Score';
class navigation extends React.Component {
    render() {
        return (
            <MainNavigator />
        )
    }


}

const MainNavigator = createStackNavigator({
    Register: {
        screen: Register
    },
    Select:
    {
        screen:Select
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
    Score:
    {
        screen:Score
    }
});




export default createAppContainer(MainNavigator);