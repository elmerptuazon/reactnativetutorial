/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Hello World,\n',
});


export default class App extends Component {
  constructor() {
    super();
    this.state = {
        inputText: "**Elmer"
    };
    this.state.customStyles = {
        color: 'red'
    };
    this.handleChangeText = this.handleChangeText.bind(this)

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

  handleChangeText(newText) {
    this.setState({
        inputText: newText
    })
  }

  render() {
    const pic = {
                uri: 'https://vignette.wikia.nocookie.net/creepypasta/images/e/e2/Anime-Girl-With-Silver-Hair-And-Purple-Eyes-HD-Wallpaper.jpg/revision/latest?cb=20140120061808'
            };
    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.welcome, this.state.customStyles]}>Welcome {this.state.inputText} to React Native!</Text>
            </View>
            <View style={styles.containerBody}>
                <Text>Username</Text>
                <TextInput defaultValue={this.state.inputText} onChangeText={this.handleChangeText}/>
                <Text>Password</Text>
                <TextInput defaultValue={this.state.inputText} onChangeText={this.handleChangeText}/>
            </View>
            <Image source={pic} style={{flexGrow:1,alignItems:'center',width:null, height:null}} />
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
