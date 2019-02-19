import React, {Component} from 'react';
import {Alert, Animated, Platform, ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from './App';


export default class MainApp extends Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

class AnotherApp extends Component {
    render() {
        return (
            <Text>Second Page Here</Text>
        );
    }
}

class ThirdApp extends Component {
    render() {
        return (
            <Text>Third Page Here</Text>
        );
    }
}

class FourthApp extends Component {
    render() {
        return (
                <App />
        );
    }
}

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: AnotherApp,
        Notification: ThirdApp,
        Content: FourthApp
    },
    {
        unmountInactiveRoutes: true
    }
)

const AppContainer = createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBody: {
        justifyContent: 'center',
        padding: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'pink'
      }
});













