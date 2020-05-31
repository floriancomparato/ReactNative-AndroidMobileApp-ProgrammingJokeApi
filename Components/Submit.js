/* COMPONENT --- SUBMIT */

/* IMPORTS*/
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

/* <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> */

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
    };
  }
  /* fonction d'envoi d'une blague à l'api */
  submitJoke = () => {
    const body = {
      formatVersion: 2,
      category: 'Programming',
      type: 'single',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
      },
      joke: this.state.joke,
    };

    /*resetForm()=>{
      ({joke: ''})}*/

    /* console.log de body*/
    console.log(body);

    /* option de fetch*/
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    /* fetch*/
    fetch('https://sv443.net/jokeapi/v2/submit', options)
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
      );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={{textAlign: 'center'}}>X Disconnect X</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 160}}>
          <Text style={{textAlign: 'center', fontSize: 30}}>
            Give me a &lt;br/&gt;
          </Text>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Submit Programming Jokes
          </Text>
        </View>
        <View>
          <TextInput
            onChangeText={typedJoke => {
              this.setState({joke: typedJoke});
            }}
            value={this.state.joke}
            placeholder="Type a joke here"
            style={{
              textAlign: 'center',
              fontSize: 20,
              borderColor: '#906454',
              borderWidth: 4,
              margin: 50,
              padding: 20,
            }}
          />
        </View>
        <View>
          <Button
            color="#906454"
            title="SUBMIT"
            onPress={() => {
              this.submitJoke();
            }}
            onPress={() => {
              alert('Joke submited!');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Submit;
