import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Picker } from 'react-native';

class RegisterPage extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/Logo.png')} />
                </View>

                <View style={styles.formContainer}>
                    {/* ======= Full Name ====== */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.formLabel}>Full Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Your Full Name'
                            underlineColorAndroid="transparent"
                        />
                    </View>
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
                    {/* ======= Street address ====== */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.formLabel}>Street Adress</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Your Street address'
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View>
                        <Picker>
                            <Picker.Item label = "Steve" value = "steve" />
                            <Picker.Item label = "Ellen" value = "ellen" />
                            <Picker.Item label = "Maria" value = "maria" />
                        </Picker>
                    </View>

                    {/* ======= Sign Up Button ====== */}
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.btnRed}>SIGN UP</Text>
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
        width: 100,
        height: 80,
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
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
    },
});

export default RegisterPage;