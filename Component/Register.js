import  React,{Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Form } from 'native-base';
import {Text,View,TouchableOpacity} from  'react-native';
import { TextInput,Button } from 'react-native-paper';
import Loader from '../assets/Loader.gif';
export default class Register extends React.Component {
  state={
    text:'',
    Loader:false
  }
  
next()
  {
    this.props.navigation.navigate('Select');
  }
  render() {
   
 return (
   <View>

      <Container>
      <Header>
        <Left />
        <Body>
          <Title style={{flex:1,justifyContent:'center',alignItems:'center',fontSize:20}}>Typing Game</Title>
        </Body>
        <Right />
      </Header>

    </Container>

<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>
<Text>{'\n'}</Text>

      <Form method="Post" action="/addname"> 
      <TextInput style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',position:'relative'}}
         type='flat'
         label='Enter Username Here'
         value={this.state.text}
         onChangeText={text => this.setState({ text })}/>
         </Form>
<Text>{'\n'}</Text>
        
      
        <Button style={{flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'}} type="submit" mode="contained" onPress={() =>this.next()}>Register</Button>
         

  
         </View>

// {/* // {!this.state.isloader?Loader:<Home/>} */}
//           </View>
  
  );
  }
}