import React, { Component } from 'react'
import { View, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardDetailPerson from '../../../components/UI/CardDetailPerson/CardDetailPerson';

const {height, width} = Dimensions.get('window');

//  IMPORT COMPONENTS
export default class History extends Component {
        // componentDidMount(){
        //   setTimeout(() => {
        //     this.props.navigation.navigate('Perfil')
        //             }, 3000);
        // }
        onHandle =()=>{
              this.props.navigation.navigate('DetailHistory')
        }
  render() {
    return (
    <View style={{width, height, backgroundColor: 'white'}}>

        <CardDetailPerson
          onHandle={this.onHandle}
          Detail
        />
    </View>

    )
  }
}

