/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Hello World,\n',
});


export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.customStyles = {
        color: 'red'
    };

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

  render() {
    const pic = {
                uri: 'https://vignette.wikia.nocookie.net/creepypasta/images/e/e2/Anime-Girl-With-Silver-Hair-And-Purple-Eyes-HD-Wallpaper.jpg/revision/latest?cb=20140120061808'
            };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width:300, height:250}} />
        <Text style={[styles.welcome, this.state.customStyles]}>Welcome Elmer to React Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});