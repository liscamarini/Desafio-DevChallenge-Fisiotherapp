import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main/Main';
import Home from './pages/Home/Exercise';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default Routes;
