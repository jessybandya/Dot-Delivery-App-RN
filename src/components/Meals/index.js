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

const Meals = ({title, data, navigation}) => {
    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={styles.item} >

                        <Pressable  style={styles1.container}>
                        <Image  style={styles1.banner} source={{ uri: item.image_url }} />
                        <View style={styles1.headerInfo}>
                          <View style={styles1.priceInfo}>
                            <FText fontSize={15} lineHeight={15}>
                              <FText color={COLORS.primary} fontSize={15} lineHeight={15}>
                                New
                              </FText>
                            </FText>
                          </View>
                          <Observer>
                            {() => {
                              const isFav = "jessy";
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
                        <View style={styles1.infoContainer}>
                          <FText fontWeight={600} fontSize={15} lineHeightRatio={1}>
                            {item.name}
                          </FText>
                          <FText fontSize={13} color={Colors.smoky}>
                            {item.category_name}
                          </FText>
                        </View>
                      </Pressable>

   
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Meals;

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
    marginBottom: setYAxisValue(15)
  },
  headerInfo: {
    position: 'absolute',
    left: setXAxisValue(12),
    right: setXAxisValue(12),
    top: setYAxisValue(12),
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btnFav: {
    height: setValue(34),
    width: setValue(34),
    borderRadius: setValue(17),
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: setXAxisValue(10),
    paddingVertical: setYAxisValue(9),
    borderRadius: 99,
    backgroundColor: Colors.white
  },
  reviewInfo: {
    height: setYAxisValue(29),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: setXAxisValue(8.5),
    borderRadius: 99,
    backgroundColor: Colors.white,
    marginLeft: setXAxisValue(13),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'flex-start',
    transform: [
      {
        translateY: setYAxisValue(-14.5)
      }
    ]
  },
  banner: {
    borderTopRightRadius: setValue(15),
    borderTopLeftRadius: setValue(15),
    height: setYAxisValue(136),
    width: '100%'
  },
  infoContainer: {
    padding: setValue(13),
    paddingTop: setYAxisValue(-14.5)
  },
  deliveryIcon: {
    width: setXAxisValue(13.78),
    height: setYAxisValue(11.43),
    marginRight: setXAxisValue(6)
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
  }
});