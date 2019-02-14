/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Alert, Platform, ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import { StackNavigator } from 'react-navigation';
import AnotherApp from './AnotherApp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Hello World,\n',
});

const AnotherPage = StackNavigator({
        Home: {
            screen: AnotherApp
        }
    });


export default class App extends Component {
  constructor() {
    super();
    this.state = {
        username: "Username",
        password: "",
        loading: false
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
        this.setState({
            loading: true
        })

        setTimeout(() => {
            Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                        {text: 'Cancel', onPress: () => console.log('Cancelled')},
                        {text: 'OK', onPress: () => console.log('Ok Pressed')}
                        ],
                        {cancelable: true}
                    )
            this.setState({
                loading: false
            })

        }, 5000)
    }
  render() {
    const pic = {
                uri: 'https://vignette.wikia.nocookie.net/creepypasta/images/e/e2/Anime-Girl-With-Silver-Hair-And-Purple-Eyes-HD-Wallpaper.jpg/revision/latest?cb=20140120061808'
            };
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('Next Page'),
    };

    return (
        <View style={styles.container}>
            <View>
                <NavigationBar title={{title:'NavBar Title'}} style={{ backgroundColor:'blue'}} rightButton={rightButtonConfig}/>
                <Text style={[styles.welcome, this.state.customStyles]}>Welcome {this.state.username} to React Native!</Text>
                <AnotherPage />
            </View>
            <ScrollView>
            <View style={styles.containerBody}>
                <Text>Username</Text>
                <TextInput defaultValue={this.state.username} onChangeText={this.handleUsernameChangeText}/>
                <Text>Password</Text>
                <TextInput defaultValue={this.state.password} onChangeText={this.handlePasswordChangeText}/>
                <Button title={"Submit"} onPress={this.handleButtonPressed} />
                <View><ActivityIndicator style={{opacity: this.state.loading ? 1.0 : 0.0}} animating={true} size="large" color="#0000ff" /></View>
                <Text>{"\n"}</Text>
                <Icon.Button name="facebook" backgroundColor="#3b5998">Login with FB</Icon.Button>
                <Image source={pic} style={{alignItems:'center',margin:20, width:100, height:100, borderRadius: 40, overflow:'hidden' }}  /><Text style={{width:100, height:100, fontStyle:'italic', fontSize:20,}}>Image Content</Text>
                <Image source={pic} style={{alignItems:'center',margin:20, width:100, height:100, borderRadius: 40, overflow:'hidden' }} /><Text style={{width:100, height:100, fontStyle:'italic', fontSize:20,}}>Image Content</Text>
                <Image source={pic} style={{alignItems:'center',margin:20, width:100, height:100, borderRadius: 40, overflow:'hidden' }} /><Text style={{width:100, height:100, fontStyle:'italic', fontSize:20,}}>Image Content</Text>
                <Image source={pic} style={{alignItems:'center',margin:20, width:100, height:100, borderRadius: 40, overflow:'hidden' }} /><Text style={{width:100, height:100, fontStyle:'italic', fontSize:20,}}>Image Content</Text>

            </View>
            </ScrollView>
            <View style={{position: 'absolute', backgroundColor:'blue', alignItems:'center', left: 0, right: 0, bottom: 0}}><Image source={pic} style={{margin:5, width:50, height:50, borderRadius: 40 }} /><Text style={{color:'white', fontWeight: 'bold', fontSize:10,}}>My fixed footer</Text></View>
        </View>
    );
  }
}

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
  },
});
