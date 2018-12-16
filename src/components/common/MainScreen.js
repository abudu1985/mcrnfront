import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class MainScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
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