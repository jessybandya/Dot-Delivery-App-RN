import React, { useState, useEffect} from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import data from "../../data/resturentData.json";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES } from "../../constants/theme";
import Carousel from "react-native-snap-carousel";
import Rating from "../../components/Rating";
import { setValue, setXAxisValue, setYAxisValue, toCorrectImageUri } from '../../utils';
import { Colors } from '../../constants/colors';
import { Layout } from '../../constants';
import Animated, { BounceIn, BounceOut, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { StarSvg } from '../../assets/svg'
import FText from "../../components/FText";
import Gallery from "./Gallery";
import Map from "./Map";
import Info from "./Info";
import Menus from "./Menus";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Reviews from "./Reviews";

const Tab = createMaterialTopTabNavigator();


// import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useEffect } from 'react';
// import { Container, FoodCard, FoodCarousel, FText, ListPicker, Padding } from '../components';
// import Animated, { BounceIn, BounceOut, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import { Layout } from '../constants';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Restaurantdetails = ({ navigation, route }) => {

    const [fav, setFav] = useState(false);

    const [days, setDays] = useState([
        { day: 'Monday', time: 'Closed'},
        { day: 'Tuesday', time: 'Closed'},
        { day: 'Wednesday', time: 'Closed'},
        { day: 'Thursday', time: 'Closed'},
        { day: 'Friday', time: 'Closed'},
        { day: 'Saturday', time: 'Closed'},
        { day: 'Sunday', time: 'Closed'},
    ]);

    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    function setOpeningHours(data){
        data.forEach((val) => {
            const index = days.findIndex((x) => x.day === daysOfTheWeek[val.day]);
            const time = `${(val.start.substring(0,2))}:${(val.start.substring(2,4))} - ${(val.end.substring(0,2))}:${(val.start.substring(2,4))}`;

            if(days[index].time === 'Closed'){
                days[index].day = daysOfTheWeek[val.day];
                days[index].time = time
            } else if((days[index].time).length > 15 && data.length > 7){
                days[index].time = `${(days[index].time)}\n${time}`;
            }
        });

        return(
            days.map((val) => (
                <View>
                    <View style={styles.line} />
                    <View style={styles.row2}>
                        <Text style={styles.subTxt}>{val.day}</Text>
                        <Text style={styles.subTxt} >{val.time}</Text>
                    </View>
                </View>
            ))
        )
    }


    return(
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={{
            height:230,
            marginTop:35
        }}>
        <Animated.View style={styles1.header}>
          <Observer>
            {() => (
              <Image
                source={{
                  uri: 'http://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg'
                }}
                style={styles1.banner}
              />
            )}
          </Observer>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles1.btnBack}>
            <Image style={styles1.backIcon} source={require('../../assets/images/chevron-left.png')} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={BounceIn}>
          <View style={styles1.logoContainer}>
            <Observer>
              {() => <Image source={{ uri: 'http://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg' }} style={styles1.logo} />}
            </Observer>
          </View>
        </Animated.View>
      </View>

        <View style={styles.container}>
        <View style={styles.top}>

        <View style={styles.row}>
            <Text style={styles.name}>{data.name}</Text>
            {
                data.is_claimed === true && (
                    <Icon name="check-decagram" size={20} color={COLORS.primary} />
                )
            }
        </View>
        <Text style={styles.address}>{`${data.location.address1}, ${data.location.city}`}</Text>
        <View style={styles.row}>
            <Rating count={data.rating} />
            <Text style={styles.subTxt}>(6 reviews)</Text>
        </View>
    </View>
    <Tab.Navigator>
      <Tab.Screen name="Menus" component={Menus} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
            </View>
       </ScrollView>

    )
}

export default Restaurantdetails;

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      overflow: 'hidden'
    },
    banner: {
      width: '100%',
      height: '100%'
    },
    btnBack: {
      position: 'absolute',
      left: setValue(15),
      top: setValue(15),
      height: setValue(38),
      width: setValue(38),
      borderRadius: setValue(12),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    backIcon: {
      width: setXAxisValue(5),
      height: setYAxisValue(9.5)
    },
    logoContainer: {
      position: 'absolute',
      zIndex: 99,
      height: setValue(100),
      width: setValue(100),
      borderRadius: 99,
      backgroundColor: Colors.white,
      bottom: setValue(-50),
      alignSelf: 'center',
      padding: setValue(10)
    },
    logo: {
      width: '100%',
      height: '100%',
      borderRadius: 99
    },
    headerContainer: {
      paddingBottom: setYAxisValue(65)
    },
    restaurantInfo: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    foodCategories: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: setYAxisValue(15)
    },
    foodCategory: {
      padding: setValue(4),
      borderRadius: setValue(4),
      marginHorizontal: setXAxisValue(5),
      backgroundColor: Colors.lighter_border
    },
    deliveryIcon: {
      width: setXAxisValue(15),
      height: setYAxisValue(13),
      marginRight: setXAxisValue(6)
    },
    timerIcon: {
      width: setXAxisValue(13),
      height: setYAxisValue(15),
      marginRight: setXAxisValue(6)
    },
    deliveryInfo: {
      marginTop: setYAxisValue(10),
      marginBottom: setYAxisValue(10),
      flexDirection: 'row',
      alignItems: 'center'
    },
    deliveryInfoLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: setXAxisValue(10)
    },
    reviewInfo: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    foodItems: {
      paddingTop: setYAxisValue(30),
      paddingHorizontal: setXAxisValue(26)
    },
    foodCard: {
      width: setValue(266)
    },
    categoryList: {},
    miniFoodCard: {
      width: (Layout.window.width - setXAxisValue(52 + 15)) / 2
    },
    emptyListContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadmoreIndicatorContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });