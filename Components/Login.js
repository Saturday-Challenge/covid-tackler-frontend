import React,{Component,useState} from 'react'
import { AsyncStorage,Button,View,TouchableOpacity, Text,StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TextInput } from 'react-native-gesture-handler'
// import { TextInput } from 'react-native-paper';

class Login extends React.Component {
//    const goToHome = () => {
//       Actions.home()
//    }
    
    constructor(props){super(props);
        this.state = {
            email:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('email').then((item)=>{
            console.log(item)
            if(item!==null){
            Actions.automate();}
        }).catch(err=>console.log(err))
    }
    // var [email,setEmail] = useState('test');
   login(){
    // var email = ;
    // alert(AsyncStorage.getItem('email'))
    AsyncStorage.getItem('email')
    .then((item) => {
        
        if (item) {
            Actions.automate()
            console.log(item)
            // alert(item)
        // do the damage
        }
    });
    // alert("testing");
   }
   handleEmail(text){
       console.log(text)
       if(text.length>3){
            // console.log(text[-2],text[-1])
            AsyncStorage.setItem('email',text)
            
            // AsyncStorage.setItem('id',text[-2]+text[-1])
        }
    //    alert(AsyncStorage.getItem('email'))
   }
   displayData = async()=>{
       try{
        let user = await AsyncStorage.getItem('email');
        alert(user);
        console.log("test")
       }
       catch(error){
            alert(error);
       }
   }
   render(){
   return (
       <View style={styles.container}>
           <Text>Login:</Text>
         <TextInput
         placeholder="email"
         label='Email'
         style={styles.input}
         onChangeText = {this.handleEmail}
         />
         <TextInput
         secureTextEntry={true}
         type="password"
         placeholder="password"
         label='Email'
         style={styles.input}
         />
    <TouchableOpacity >
        <Button title="Login" onPress = {this.login}/>
      </TouchableOpacity>
      </View>
   )}
}
export default Login

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        borderWidth:1,
        borderColor:"#777",
        padding:8,
        margin:10,
        width:200

    }
})