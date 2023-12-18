import { StyleSheet, View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useThemeStyle } from '../hooks/useThemeStyle';

import { HomeScreen } from '../screens/Home';
import { MachineScreen } from '../screens/Machine';

import Home from '../assets/home.svg';
import HomeWhite from '../assets/home-white.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BOTTOM_TABS_HEIGHT = 48;
const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    width: '100%',
    elevation: 0,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
  },
  header: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
  },
  navIcon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

const NavBarIcon = () => {
  const themeStyles = useThemeStyle();
  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };
  const scheme = useColorScheme();

  return (
    <View style={[styles.navIcon, backgroundStyle]}>
      {scheme === 'light' ? (<Home width={24} height={24} />) : (<HomeWhite width={24} height={24} />)}
    </View>
  )
}

const DashboardNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={HomeScreen} />
      <Stack.Screen name="Machine" component={MachineScreen} options={{headerShown: true}} />
    </Stack.Navigator>
  );
}

const BottomBarNav = () => {
  const { bottom } = useSafeAreaInsets();
  const tabHeight = BOTTOM_TABS_HEIGHT + bottom;

  const themeStyles = useThemeStyle();
  const backgroundStyle = {
    backgroundColor: themeStyles.backgroundColor,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [styles.bar, backgroundStyle, { height: tabHeight }],
        headerStyle: [styles.header, backgroundStyle],
        headerTitleStyle: [styles.headerTitle, {color: themeStyles.color}],
        title: 'Peacotum',
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: NavBarIcon,
        }}
        component={DashboardNav}
      />
      <Tab.Screen
        name="Alerts"
        options={{
          tabBarIcon: NavBarIcon,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomBarNav;