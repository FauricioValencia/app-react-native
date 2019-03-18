import React, {Component} from 'react'
import { Dimensions, ImageBackground, AsyncStorage } from 'react-native';
const {height, width} = Dimensions.get('window');
export default class Splash extends Component {
    static navigationOptions ={
        header: null
        }
        async componentDidMount (){
            const token = await AsyncStorage.getItem('token');
            setTimeout(() => {
                if(token){
                    this.props.navigation.navigate("main")
                }else{
                    this.props.navigation.push('TypeUser')
                }
            }, 500);

        }
  render() {
    return (
        <ImageBackground
            source={require('../../assets/splash.jpg')}
            style={{height, width}}>
        </ImageBackground>
        )
  }
}

