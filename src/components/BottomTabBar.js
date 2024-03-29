import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { CartSvg, DiscoverSvg, OrderSvg, ProfileSvg } from '../assets/svg';
import { setValue, setXAxisValue, setYAxisValue } from '../utils';
import { Colors } from '../constants/colors';
import Animated, { BounceIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import FText from './FText';
import { COLORS } from '../constants/theme';
const tabBarData = [
  {
    name: 'Home',
    icon: DiscoverSvg,
    routeName: 'Home'
  },
  {
    name: 'Cart',
    icon: CartSvg,
    routeName: 'Cart'
  },
  {
    name: 'Orders',
    icon: OrderSvg,
    routeName: 'Orders'
  },
  {
    name: 'Profile',
    icon: ProfileSvg,
    routeName: 'Profile'
  }
];
const BottomTabBar = ({ navigation, state }) => {
  const cartStore = useStore('cart');
  const renderTabBarItem = (item, index) => {
    const isActive = state.index === index;
    const isCart = item.routeName === 'Cart';
    const onPress = () => navigation.navigate(item.routeName);
    return (
      <Pressable key={item.name} onPress={onPress} style={styles.tabItem}>
        {isActive && <Animated.View entering={BounceIn} style={styles.activeLine} />}
        {isActive ? (
          <Animated.View entering={FadeInUp}>
            <item.icon color={COLORS.primary} />
          </Animated.View>
        ) : (
          <item.icon color={Colors.typography_40} />
        )}
        <Observer>
          {() => (
            <React.Fragment>
              {isCart && cartStore.cartItemsTotalAmount > 0 && (
                <View style={styles.cartBadge}>
                  <FText fontSize={10} color={Colors.white}>{`${cartStore.cartItemsTotalAmount}`}</FText>
                </View>
              )}
            </React.Fragment>
          )}
        </Observer>
      </Pressable>
    );
  };
  return (
    <View>
      <View style={styles.bottomTabBar}>{tabBarData.map(renderTabBarItem)}</View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: setYAxisValue(74),
    backgroundColor: Colors.white,
    borderTopColor: Colors.border,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  activeLine: {
    width: setValue(40),
    height: setValue(3),
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: 0,
    borderBottomRightRadius: setValue(3),
    borderBottomLeftRadius: setValue(3)
  },
  cartBadge: {
    position: 'absolute',
    top: setYAxisValue(10),
    right: setXAxisValue(30),
    padding: setValue(2),
    paddingHorizontal: setXAxisValue(4),
    borderRadius: 99,
    backgroundColor: COLORS.primary,
    borderColor: Colors.white,
    borderWidth: setValue(2)
  }
});
