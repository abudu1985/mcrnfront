
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Loading } from '../components/common/';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage.js';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      email: '',
      error: '',
      jwt: ''
    }
    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  componentDidMount(){
    const headers = {
      'Authorization': 'Bearer ' + this.jwt
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

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
  }

  render() {
    const { container, emailText, errorText } = styles;
    const { loading, email, error } = this.state;

    if (loading){
      return(
        <View style={container}>
          <Loading size={'large'} />
        </View>
      )
    } else {

      return(
        <View style={container}>
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
          <Button onPress={this.deleteJWT}>
            Log Out
          </Button>
        </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
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
};
