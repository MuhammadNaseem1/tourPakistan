/**
 * @format
 */
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import {store} from './assets/app/store';
export default function Main() {
    return (
<Provider store={store}>
  <PaperProvider>
        <App />
      </PaperProvider>
</Provider>
      
    );
  }
AppRegistry.registerComponent(appName, () => Main);
