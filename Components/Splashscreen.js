/* COMPONENT --- SPLASHSCREEN */

/* IMPORTS*/
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

/* <<<<<<<<>>>>>>>>>>>> */

class Splashscreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000); // 3sec de splashscreen, puis >>>>>>>>> Login Screen
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#906454'}}>
        <Image
          source={require('../Img/coffee.png')}
          style={{
            alignItems: 'center',
            marginLeft: 160,
            marginTop: 200,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 50,
            color: '#270d04',
            fontFamily: 'Montserrat',
          }}>
          Give me a &lt;br/&gt;
        </Text>
      </View>
    );
  }
}

export default Splashscreen;
