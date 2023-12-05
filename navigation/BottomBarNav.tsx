import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeStyle } from '../hooks/useThemeStyle';

import { HomeScreen } from '../screens/Home';

import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

const BOTTOM_TABS_HEIGHT = 48;
const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 0,
    position: 'absolute',
    width: '100%',
    elevation: 0
  },
  badge: {
    // unset some react navigation styles
    minWidth: undefined,
    paddingHorizontal: undefined,
    lineHeight: undefined,
   // backgroundColor: COLORS.GREEN,
   // fontFamily: FONTS.BOLD,
    fontSize: 9,
    top: -8,
    left: 2,
    height: 16,
    width: 16,
    borderRadius: 8,
   // paddingTop: IS_ANDROID ? 1.5 : 2.5
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
  const fillColor = themeStyles.color;
  console.log('fillColor ', fillColor)
  return (
    <View style={[styles.navIcon, backgroundStyle]}>
      <Home width={24} height={24} fill={fillColor} />
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
    </Tab.Navigator>
  );
}

export default BottomBarNav;