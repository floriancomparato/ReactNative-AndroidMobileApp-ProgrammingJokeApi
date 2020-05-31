/* COMPONENT --- HOME */

/* IMPORTS*/
import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Button} from 'react-native';

/* <<<<<<<<>>>>>>>>>>>> */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
    };
  }

  /* fonction pour recuperer les blagues de l'api */
  getJoke = () => {
    fetch(
      'https://sv443.net/jokeapi/v2/joke/Programming?format=json&type=single',
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          joke: data.joke,
        });
      });
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
            Random Programming Jokes
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              borderColor: '#906454',
              borderWidth: 4,
              margin: 50,
              padding: 20,
            }}>
            {this.state.joke}
          </Text>
        </View>
        <View>
          <Button color="#906454" title="LOL" onPress={this.getJoke}>
            LOL
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
