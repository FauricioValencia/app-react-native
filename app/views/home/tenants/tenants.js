import React, { Component } from 'react'
import { View, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardDetailPerson from '../../../components/UI/CardDetailPerson/CardDetailPerson';

const {height, width} = Dimensions.get('window');

//  IMPORT COMPONENTS
export default class tenants extends Component {
        // componentDidMount(){
        //   this.props.navigation.openDrawer();
        //   setTimeout(() => {
        //     this.props.navigation.closeDrawer();
        //   }, 3000);
        // }
  render() {
    return (
    <View style={{width, height, backgroundColor: 'white'}}>
      <CardDetailPerson
        Detail
        onHandle={()=>this.props.navigation.navigate('DetailTenants')}
        />
    </View>
    )
  }
}

