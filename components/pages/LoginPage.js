import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

class LoginPage extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/Logo.png')} />
        </View>

        <View style={styles.formContainer}>
          {/* ======= Email ====== */}
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Your Email'
              underlineColorAndroid="transparent"
              />
          </View>
          {/* ======= Password ====== */}
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Your Password'
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              />
          </View>
          {/* ======= Login Button ====== */}
          <View>
            <TouchableOpacity>
              <Text style={styles.btnRed}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          {/* ======== Sign Up ========= */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Forget Password?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 180,
    height: 150,
  },
  formLabel: {
    fontSize: 16,
    color: '#ff1616',
  },
  textInput: {
    height: 30,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ff1616',
  },
  inputContainer: {
    marginTop: 15,
  },
  formContainer: {
    marginTop: 20,
  },
  btnRed: {
    backgroundColor: '#ff1616',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 15,
  },
  signUpText: {

  },
  signUpBtn: {
    color: '#ff1616',
    marginLeft: 10,
  }
});

export default LoginPage;