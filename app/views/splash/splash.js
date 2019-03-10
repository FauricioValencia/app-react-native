import React, {Component} from 'react'
import { Dimensions, ImageBackground } from 'react-native';
const {height, width} = Dimensions.get('window');
export default class Splash extends Component {
    static navigationOptions ={
        header: null
        }
        componentDidMount (){
            setTimeout(() => {
                this.props.navigation.push('TypeUser')
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

