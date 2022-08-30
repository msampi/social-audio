import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/ui/Login';
import RegisterScreen from './src/ui/Register';
import CallList from './src/ui/CallList';
import RecordedCall from './src/ui/RecordedCall';
import CreateCall from './src/ui/CreateCall';
import CreateCallResponse from './src/ui/CreateCallResponse';
import AccountEditScreen from './src/ui/AccountEdit';
import MyCallsScreen from './src/ui/MyCalls';
import SelectPlanScreen from './src/ui/SelectPlan';
import { AppProvider } from './src/ui/AppProvider';
import { CallProviderScreen } from './src/ui/ConferenceCall/CallProviderScreen';

if (__DEV__) {
  // @ts-ignore
  import('./reactotron.config.ts').then(() => console.log('Reactotron Configured'));
}

const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginIntent">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="CallList" component={CallList} />
          <Stack.Screen name="ConferenceCall" component={CallProviderScreen} />
          <Stack.Screen name="RecordedCall" component={RecordedCall} />
          <Stack.Screen name="CreateCall" component={CreateCall} />
          <Stack.Screen name="CreateCallResponse" component={CreateCallResponse} />
          <Stack.Screen name="AccountEdit" component={AccountEditScreen} />
          <Stack.Screen name="MyCalls" component={MyCallsScreen} />
          <Stack.Screen name="SelectPlan" component={SelectPlanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
