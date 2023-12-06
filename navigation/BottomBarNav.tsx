import { StyleSheet, View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeStyle } from '../hooks/useThemeStyle';

import { HomeScreen } from '../screens/Home';

import Home from '../assets/home.svg';
import HomeWhite from '../assets/home-white.svg';

const Tab = createBottomTabNavigator();

const BOTTOM_TABS_HEIGHT = 48;
const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 0,
    position: 'absolute',
    width: '100%',
    elevation: 0
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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.bar, backgroundStyle, { height: tabHeight }]
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: NavBarIcon
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Home2"
        options={{
          tabBarIcon: NavBarIcon
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomBarNav;