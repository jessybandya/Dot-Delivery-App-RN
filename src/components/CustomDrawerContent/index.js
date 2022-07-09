import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import { Layout } from '../../constants'
import { appStore, userStore } from '../../stores'
import { drawerMenus } from '../../constants/data'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { LogoutSvg } from '../../assets/svg'
import { Colors } from '../../constants/colors'
import { Observer } from 'mobx-react-lite'
import { setValue, setXAxisValue, setYAxisValue } from '../../utils'
import Padding from '../../components/Padding'
import FText from '../../components/FText'
import { autorun } from 'mobx';
import { COLORS, SIZES } from '../../constants/theme';
import { Divider } from 'react-native-elements';



  function CustomDrawerContent({ navigation }) {

    const renderMenuItem = item => {
      const onPress = () => {
        appStore.toggleDrawerMenu();
        setTimeout(() => {
          navigation.navigate(item.routeName);
        }, 500);
      };
      return (
        <TouchableOpacity onPress={onPress} key={item.routeName} style={styles.btnMenu}>
          <View style={styles.menuIcon}>
            {item.iconSrc ? <Image style={styles.icon} source={item.iconSrc} /> : <item.iconComponent color={Colors.drawer_icon_color} />}
          </View>
          <FText>{item.name}</FText>
        </TouchableOpacity>
      );
    };
    return (
      <DrawerContentScrollView >
      <Animated.View style={styles.container}>
     <View style={{
      flexDirection:'row',
      padding:15
     }}>
     <View>
     <Image style={styles.avatar} 
     source={{ 
      uri: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-square-FS-77.jpg'
    }} 
     />
     </View>
       <View style={{
        marginLeft:10
       }}>
      <FText fontSize="large" fontWeight={700}>
      Jessy Bandya
    </FText>
    <FText fontSize="small" color={Colors.grey_suit}>
    jessy.bandya5@gmail.com
  </FText>
  <FText fontSize="small" color={Colors.grey_suit}>
  +254746749307
</FText>
      </View>
     </View>

   </Animated.View>
   <View
   style={{
     borderBottomColor: COLORS.primary,
     borderBottomWidth: StyleSheet.hairlineWidth,
   }}
 />
   <View style={{
    padding:10
   }}>
   <View style={styles.menuList}>{drawerMenus.map(renderMenuItem)}</View>

   </View>
   <View
  style={{
    borderBottomColor: COLORS.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
   <View style={{
    alignItems:'center',
   }}>
   <TouchableOpacity
   style={styles.btnLogout}>
   <View style={styles.logoutIcon}>
     <LogoutSvg />
   </View>
   <FText color={Colors.white}>Log Out</FText>
 </TouchableOpacity>
   </View>
        
      </DrawerContentScrollView>
    );
  }

export default CustomDrawerContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.app_background
  },
  appContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  menuContainer: {
    paddingLeft: setXAxisValue(26),
    paddingVertical: setYAxisValue(50),
    position: 'absolute',
    height: '100%',
    left: 0
  },
  avatar: {
    width: setValue(80),
    height: setValue(80),
    borderRadius: 99,
    backgroundColor: Colors.white
  },
  menuList: {
    marginTop: setYAxisValue(25),
    flex: 1
  },
  btnMenu: {
    paddingVertical: setYAxisValue(18),
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnLogout: {
    height: setYAxisValue(43),
    padding: setValue(9),
    marginTop:60,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    flexDirection: 'row',
    flex: 1,
    width:150
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999
  },
  menuIcon: {
    marginRight: setXAxisValue(14)
  },
  icon: {
    width: setValue(23),
    height: setValue(23)
  },
  logoutIcon: {
    width: setValue(26),
    height: setValue(26),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 99,
    marginRight: setXAxisValue(9)
  }
});
