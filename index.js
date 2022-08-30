/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;

// @ts-ignore
TextInput.defaultProps = {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
