import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SignInScreen from '../screens/SignIn'
import SignUpScreen from "../screens/SignUp"
import HomeScreen from '../screens/Home'
import ForgotPwdScreen from '../screens/ForgotPwd'
import { COLORS, SIZES } from '../constants/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurantdetails from '../screens/Restaurantdetails'


const Stack = createStackNavigator();


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

const Router = () => {
  const [user, setUser] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {
        user === true ? (
          <>
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
              shadowOpacity: 0,
          },
          headerTitle: 'Find Best Restaurants',
          headerTitleStyle: {
              color: COLORS.white,
              fontWeight: '800',
          },
        //   headerRight: (
        //     <Icon2 name="options-sharp"
        //         size={30} color={COLORS.white}
        //         style={{paddingRight: 10}}
        //         // onPress={() => { navigation.openDrawer() }}
        //     />
        // ),
          }}
          />
          <Stack.Screen name="Restaurantdetails" component={Restaurantdetails}
          options={{
            headerTitle: null,
          }}
          />
          </>
        ):(
         <>         
        <Stack.Screen name="SignIn" component={SignInScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="ForgotPwd" component={ForgotPwdScreen} 
        options={{
          headerTitle: null,
          headerBackTitle: 'back',
          headerBackTitleStyle: {
              fontWeight: 'bold',
          },
          headerTintColor: COLORS.white,
          headerStyle: {
              backgroundColor: COLORS.primary,
          }
        }}
        />
         </>
        )
        
      }

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

