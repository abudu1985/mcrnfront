import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import * as axios from "axios";

class MainScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      email: '',
      error: ''
    }
  }

  componentDidMount(){
    const headers = {
      'Authorization':  this.props.jwt
    };
    axios({
      method: 'GET',
      url: 'http://192.168.0.104:5000/api/users/me',
      headers: headers,
    }).then((response) => {
      this.setState({
        email: response.data.email,
        loading: false
      });
    }).catch((error) => {
      this.setState({
        error: 'Error retrieving data',
        loading: false
      });
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
        <View>
          {email ?
            <Text style={emailText}>
              Your email: {email}
            </Text>
            :
            <Text style={errorText}>
              {error}
            </Text>}
        </View>
        <Button onPress={this.props.deleteJWT}>
          Log Out
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
  },
  errorText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
});

export default MainScreen;