/* COMPONENT --- LOGIN */

/* IMPORTS*/
import React, {Component} from 'react';
import {SafeAreaView, Text, TextInput, Button, Image} from 'react-native';

/* <<<<<<<<>>>>>>>>>>>> */

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../Img/coffee.png')}
          style={{
            alignItems: 'center',
            marginLeft: 160,
            marginTop: 200,
          }}
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          Give me a &lt;br/&gt;
        </Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Login to laugh !
        </Text>
        <TextInput
          style={{borderColor: '#906454', borderWidth: 4, margin: 20}}
          placeholder="Email"
        />
        <TextInput
          style={{borderColor: '#906454', borderWidth: 4, margin: 20}}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          style={{width: 20}}
          title="LOGIN"
          color="#906454"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </SafeAreaView>
    );
  }
}

export default Login;
