// import React from "react";
// import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
// import Rating from "../Rating";
import styles from "./styles";
import { Observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { Image, Pressable, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { HeartSvg, StarSvg } from '../../assets/svg';
import { Colors } from '../../constants/colors';
import { setValue, setXAxisValue, setYAxisValue, toCorrectImageUri } from '../../utils';
import FText from '../FText';
import { COLORS } from "../../constants/theme";

const Restaurent = ({title, data, navigation}) => {
    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.item} >


                        <Pressable 
                        onPress={() => {
                            navigation.navigate('RestaurantDetail');
                        }}
                        style={styles1.container}>
                        <Image  style={styles1.banner} source={{ uri: item.image_url }} />
                        <View style={styles1.headerInfo}>
                          <View style={styles1.reviewInfo}>
                            <FText fontSize={12} lineHeight={12}>
                              {12 || '--'}{' '}
                            </FText>
                            <StarSvg color={Colors.secondary} />
                            <FText color={Colors.typography_20} fontSize={8.5} lineHeight={10}>
                              {' '}
                              ({`${34}+`})
                            </FText>
                          </View>
                          <Observer>
                            {() => {
                              const isFav = `Jessy`;
                              const onPress = () => {
                             
                              };
                              return (
                                <TouchableOpacity
                                  onPress={onPress}
                                  style={[
                                    styles1.btnFav,
                                    isFav && {
                                      backgroundColor: COLORS.primary
                                    }
                                  ]}>
                                  <HeartSvg color={COLORS.white} size={15} />
                                </TouchableOpacity>
                              );
                            }}
                          </Observer>
                        </View>
                        <View style={styles1.infoContainer}>
                          <FText fontWeight={600} fontSize={15} lineHeightRatio={1}>
                          {item.name}
                          </FText>
                          <View style={styles1.deliveryInfo}>
                            <View style={styles1.deliveryInfoLine}>
                              <Image style={styles1.deliveryIcon} source={require('../../assets/images/delivery.png')} />
                              <FText color={Colors.gray_80} fontSize={12} lineHeight={14}>
                                {23 === 0 ? 'Free Delivery' : `$${45}/order`}
                              </FText>
                            </View>
                            {/* <View style={styles1.deliveryInfoLine}>
                              <Image style={styles1.timerIcon} source={require('../assets/images/timer.png')} />
                              <FText color={Colors.gray_80} fontSize={12} lineHeight={14}>
                                {item.delivery_time}
                              </FText>
                            </View> */}
                          </View>

                        </View>
                      </Pressable>


   
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Restaurent;

const styles1 = StyleSheet.create({
    container: {
      borderRadius: setValue(15),
      width: setXAxisValue(266),
      backgroundColor: Colors.white,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      marginRight: setXAxisValue(15),
      marginBottom: setYAxisValue(15)
    },
    headerInfo: {
      position: 'absolute',
      left: setXAxisValue(11),
      right: setXAxisValue(11),
      top: setYAxisValue(10),
      zIndex: 99,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    btnFav: {
      height: setValue(28),
      width: setValue(28),
      borderRadius: setValue(14),
      backgroundColor: Colors.gray,
      justifyContent: 'center',
      alignItems: 'center'
    },
    reviewInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: setXAxisValue(7),
      paddingVertical: setYAxisValue(7),
      borderRadius: 99,
      backgroundColor: Colors.white
    },
    banner: {
      borderTopRightRadius: setValue(15),
      borderTopLeftRadius: setValue(15),
      height: setYAxisValue(136),
      width: setXAxisValue(266)
    },
    infoContainer: {
      padding: setValue(13)
    },
    deliveryIcon: {
      width: setXAxisValue(13.78),
      height: setYAxisValue(11.43),
      marginRight: setXAxisValue(6),
    },
    timerIcon: {
      width: setXAxisValue(10.68),
      height: setYAxisValue(12.09),
      marginRight: setXAxisValue(6)
    },
    deliveryInfo: {
      marginTop: setYAxisValue(6),
      marginBottom: setYAxisValue(10),
      flexDirection: 'row',
      alignItems: 'center'
    },
    deliveryInfoLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: setXAxisValue(10)
    },
    foodCategories: {
      flexDirection: 'row'
    },
    categoryItem: {
      paddingHorizontal: setXAxisValue(6),
      paddingVertical: setYAxisValue(4),
      backgroundColor: Colors.lighter_border,
      marginRight: setXAxisValue(8),
      borderRadius: setValue(6)
    }
  });