import  React,{Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import {Text,View,TouchableOpacity,StyleSheet} from  'react-native';
import { TextInput,Button } from 'react-native-paper';
export default class Easy extends React.Component {
 
constructor()
{
super();
  this.state={
    number:'',
    isloader:false,
    flag:false,
    TextInput:'',
    timer: null,
    counter: 0,
    nextnumber:'',
    Score:0,
    
  }
  this.generate=this.generate.bind(this);
  this.nextgenerate=this.nextgenerate.bind(this);


}  
  componentDidMount()
  {
    this.generate();
    let timer = setInterval(this.tick,1000);
    this.setState({timer});
  
  }
  
  generate()
  {
    const number=Math.floor(Math.random()*100)+1;
    this.setState({number:number});
    
  }
  check(e)
  {
    const {number,flag}=this.state;
    const value =e;
    this.setState({flag:true})
    this.setState({TextInput:value})
  
  }
  tick =() => {
    this.setState({counter: this.state.counter + 1}); 
  }
  nextgenerate()
  {
  
      const {TextInput,number}=this.state;
      let nextnumber=Math.floor(Math.random()*100)+1;
      this.setState({number:nextnumber});
    if(TextInput==number)
    {
    this.setState({Score:this.state.Score+1});
    }
    else if(TextInput!==number)

    {
      this.setState({Score:this.state.Score-1});
   
    }
   
     {this.state.counter?this.setState({counter:0}):this.tick}
    }
  
    render() {
      return (
        <View>
      <Container>
      <Header>
        <Left />
        <Body>
          <Title style={{flex:1,justifyContent:'center',alignItems:'center',}}>Typing Game</Title>
        </Body>
        <Right />
      </Header>
      
      </Container>
      <Text>{'\n'}</Text>
          <Text style={{flex:1,flexDirection:'row-reverse',textAlign:'center',alignItems:'center',fontSize:25}}>{this.state.counter}</Text>  
    
        <Text>{'\n'}</Text>
      <View style={{flex:1,flexDirection:'column',width:600,height:6,marginLeft:50}}>
      <Text>{'\n'}</Text><Text>{'\n'}</Text>
      <TextInput 
         type='Outline'
         label ='Enter Below Text here'
         ref="uservalue"
         value={this.state.uservalue}
         onChangeText={(e)=>{this.check(e)}}/>
         </View>
         <Text>{'\n'}</Text><Text>{'\n'}</Text>
  
<View style={styles.container}>
       <View style={styles.SquareShapeView}>
         <Text style={{flex:1,alignItems:'center',justifyContent:'center',color:'FFF',fontSize:70,marginLeft:10}}>{this.state.number}</Text>
         </View>
     </View>
{!this.state.flag?this.check:<Button onPress={()=>{this.nextgenerate()}}>Next</Button>}
         </View>
       
);


  }
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  SquareShapeView: {
 
    width: 120,
    height: 120,
    backgroundColor: '#00BCD4'
 
  },
 
  
  
 
});