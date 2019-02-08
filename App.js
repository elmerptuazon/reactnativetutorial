/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Hello World,\n',
});


export default class App extends Component {
  constructor() {
    super();
    this.state = {
        username: "Username",
        password: ""
    };
    this.state.customStyles = {
        color: 'red'
    };
    this.handleUsernameChangeText = this.handleUsernameChangeText.bind(this)
    this.handlePasswordChangeText = this.handlePasswordChangeText.bind(this)
    this.handleButtonPressed = this.handleButtonPressed.bind(this)

    setInterval(() => {
        if(this.state.customStyles.color == 'red') {
            this.setState({customStyles: {
                    color: 'green'
                }
            })
        }
        else {
            this.setState({customStyles: {
                    color: 'red'
                }
            })
        }
    }, 1000);
  }

    handleUsernameChangeText(newText) {
      this.setState({
          username: newText
      })
    }

    handlePasswordChangeText(newText) {
      this.setState({
          password: newText
      })
    }

    handleButtonPressed() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
            {text: 'Cancel', onPress: () => console.log('Cancelled')},
            {text: 'OK', onPress: () => console.log('Ok Pressed')}
            ],
            {cancelable: true}
        )
    }
  render() {
    const pic = {
                uri: 'https://vignette.wikia.nocookie.net/creepypasta/images/e/e2/Anime-Girl-With-Silver-Hair-And-Purple-Eyes-HD-Wallpaper.jpg/revision/latest?cb=20140120061808'
            };
    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.welcome, this.state.customStyles]}>Welcome {this.state.username} to React Native!</Text>
            </View>
            <View style={styles.containerBody}>
                <Text>Username</Text>
                <TextInput defaultValue={this.state.username} onChangeText={this.handleUsernameChangeText}/>
                <Text>Password</Text>
                <TextInput defaultValue={this.state.password} onChangeText={this.handlePasswordChangeText}/>
                <Button title={"Submit"} onPress={this.handleButtonPressed} />
            </View>
            <Image source={pic} style={{alignItems:'center',margin:20, width:100, height:150}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  containerBody: {
      justifyContent: 'center',
      padding: 20
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
});
