/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import MainApp from './AnotherApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainApp);
