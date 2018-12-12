import * as React from 'react';
import { Text,
    View,
    StyleSheet,
    ScrollView } from 'react-native';

import {StackNavigator} from "react-navigation";

// Import Pages:
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';


const Application = StackNavigator({
    Home: {screen: LoginPage},
},{
    navigationOptions: {
        header: false,
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <RegisterPage />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});