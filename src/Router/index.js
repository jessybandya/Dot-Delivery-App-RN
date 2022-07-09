import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import SignInScreen from '../screens/SignIn'
import SignUpScreen from "../screens/SignUp"
import HomeScreen from '../screens/Home'
import ForgotPwdScreen from '../screens/ForgotPwd'
import { autorun } from 'mobx';
import { COLORS, SIZES } from '../constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import Restaurantdetails from '../screens/Restaurantdetails'
import BottomTabBar from '../components/BottomTabBar'
import FText from '../components/FText'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Home/Cart'
import Orders from '../screens/Home/Orders'
import Profile from '../screens/Home/Profile'
import { config } from './config'
import { Layout } from '../constants'
import { appStore, userStore } from '../stores'
import { drawerMenus } from '../constants/data'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { LogoutSvg } from '../assets/svg'
import { Colors } from '../constants/colors'
import { Observer } from 'mobx-react-lite'
import { setValue, setXAxisValue, setYAxisValue } from '../utils'
import Padding from '../components/Padding'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent'
import { auth } from '../../firebase'
import UserAddress from '../components/CustomDrawerContent/UserAddress'
import PaymentMethods from '../components/CustomDrawerContent/PaymentMethods'
import ContactUs from '../components/CustomDrawerContent/ContactUs'
import Settings from '../components/CustomDrawerContent/Settings'
import Help from '../components/CustomDrawerContent/Help'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();


// const authStack = createStackNavigator({
//   signin: {
//       screen: SignInScreen,
//       navigationOptions: {
//           headerShown: false,
//       }
//   },
//   signup: {
//       screen: SignUpScreen,
//       navigationOptions: {
//           headerShown: false,
//       }
//   },
//   forgotpwd: {
//       screen: ForgotPwdScreen,
//       navigationOptions: {
//           headerTitle: null,
//           headerBackTitle: 'back',
//           headerBackTitleStyle: {
//               fontWeight: 'bold',
//           },
//           headerTintColor: COLORS.white,
//           headerStyle: {
//               backgroundColor: COLORS.primary,
//           }
//       }
//   },
// });

export default function Router () {
  const HomeTab = () => (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={config}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
  const HomeStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          animation: 'none'
        }}
        name="RestaurantDetail"
        component={Restaurantdetails}
      />
    </Stack.Navigator>
  );
  const authStack = () => (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPwd" component={ForgotPwdScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
    <Drawer.Navigator
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    {!auth ?(
      <>
      <Drawer.Screen name="auth" component={authStack} />
      </>
    ):(
      <>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="UserAddress" component={UserAddress} />
      <Drawer.Screen name="PaymentMethods" component={PaymentMethods} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={Help} />
      </>
    )}

  </Drawer.Navigator>
  </NavigationContainer>
  );
};