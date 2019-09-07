import React,{Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle,Tab, Tabs } from 'native-base';
import {Text,View,TouchableOpacity,StyleSheet} from  'react-native';
import { TextInput,Button, } from 'react-native-paper';
import Easy from '../Component/Easy'
import Medium from '../Component/Medium'
import Hard from '../Component/Hard'
import Myscreen from '../Config/router'
export default  class Score extends React.Component{

render()
{
return(
              <Container>
            <Header hasTabs />
            <Tabs>
              <Tab heading="Easy">
                <Easy/>
              </Tab>
              <Tab heading="Medium">
                <Medium />
              </Tab>
              <Tab heading="Hard">
                <Hard/>
              </Tab>
            </Tabs>
          </Container>
        );

}
}