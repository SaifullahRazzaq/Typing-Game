import React,{Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import {Text,View,TouchableOpacity} from  'react-native';
import { TextInput,Button } from 'react-native-paper';
export default  class Select extends React.Component{
render()
{
return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>     
<Text style={{fontSize:30}}>Select Level</Text>
<Text>{'\n'}</Text><Text>{'\n'}</Text>
<TouchableOpacity>
<Button  style={{marginTop:100, padding:5}}  mode="contained" onPress={()=>{this.props.navigation.navigate('Easy')}}>Easy</Button>
</TouchableOpacity>

<Text>{'\n'}</Text>
<TouchableOpacity>
<Button mode="contained" onPress={()=>{this.props.navigation.navigate('Medium')}}>Medium</Button>
</TouchableOpacity>
<Text>{'\n'}</Text>

<TouchableOpacity>
<Button style={{padding:5}}  mode="contained" onPress={()=>{this.props.navigation.navigate('Hard')}}>Hard</Button>
</TouchableOpacity>


    </View>
)
}
}