import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomBarNav from './BottomBarNav';
import { LoadingScreen } from '../screens/Loading';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Root" component={BottomBarNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;