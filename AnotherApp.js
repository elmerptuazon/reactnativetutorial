import React, {Component} from 'react';
import {Alert, Animated, Platform, ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from './App';
import SplashScreen from 'react-native-splash-screen';
import Calendar from 'react-native-calendar-select';
import AwesomeButton from 'react-native-really-awesome-button';


export default class MainApp extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <AppContainer />
        );
    }
}

class ChooseDate extends Component {
    constructor (props) {
      super(props);
      this.state = {
        startDate: new Date(2017, 6, 12),
        endDate: new Date(2017, 8, 2)
      };
      this.confirmDate = this.confirmDate.bind(this);
      this.openCalendar = this.openCalendar.bind(this);
    }
    // when confirm button is clicked, an object is conveyed to outer component
    // contains following property:
    // startDate [Date Object], endDate [Date Object]
    // startMoment [Moment Object], endMoment [Moment Object]
    confirmDate({startDate, endDate, startMoment, endMoment}) {
      this.setState({
        startDate,
        endDate
      });
    }
    openCalendar() {
      this.calendar && this.calendar.open();
    }
    // in render function
    render() {
      // It's an optional property, I use this to show the structure of customI18n object.
      let customI18n = {
        'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'text': {
          'start': 'Check in',
          'end': 'Check out',
          'date': 'Date',
          'save': 'Confirm',
          'clear': 'Reset'
        },
        'date': 'DD / MM'  // date format
      };
      // optional property, too.
      let color = {
        subColor: '#f0f0f0'
      };
      return (
        <View style={{alignSelf: 'center'}}>
          <Button adjustsFontSizeToFit={true} title="Open Calendar" onPress={this.openCalendar} />
          <Calendar
            i18n="en"
            ref={(calendar) => {this.calendar = calendar;}}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            minDate="20170510"
            maxDate="20180312"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onConfirm={this.confirmDate} />
        </View>
      );
    }
}

class ShowDatePicker extends Component {

    constructor() {
        super()
        this.state = {
            progressText: "AwesoneButton"
        }

        this.handleProgressCompletion = this.handleProgressCompletion.bind(this)
    }

    handleProgressCompletion() {

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
        return (
        <View>
            <ChooseDate />
            <AwesomeButton
            progress
            onPress={next => {
                setTimeout(() => {
                    this.handleProgressCompletion
                    action('clicked')
                    next()
                }, 3000)
            }}>
            {this.state.progressText}
            </AwesomeButton>
        </View>
        );
    }
}

class AnotherApp extends Component {
    render() {
        return (
            <View>
                <Text>Second Page Here</Text>
            </View>
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
        "Pick Date": ShowDatePicker,
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













