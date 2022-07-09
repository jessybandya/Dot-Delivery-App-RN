import React from "react";
import { StyleSheet,TextInput, TouchableOpacity, Image, View, ScrollView, Pressable, Text, StatusBar } from 'react-native';
// import { Container, FInput, FoodCarousel, FoodCategoryList, FText, RestaurantCarousel } from '../../components';
import Container from "../../components/Container";
// import FoodCarousel from "../../components/FoodCarousel"
import FInput from "../../components/FInput";
// import FoodCategoryList from "../../components/FoodCategoryList";
import FText from "../../components/FText";
// import RestaurantCarousel from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/theme';
import Restaurent from "../../components/Restaurant";
import DATA from "../../data/data.json";
import { setValue, setXAxisValue, setYAxisValue, toCorrectImageUri } from '../../utils';
import { Colors } from '../../constants/colors';
import { Observer, observer } from 'mobx-react-lite';
import { ChevronRightSvg, SearchSvg } from '../../assets/svg';
import FoodCategoryList from "../../components/FoodCategoryList";
import Menu from "../../components/Menu";
import Meals from "../../components/Meals";


const HomeScreen = ({ navigation }) => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(COLORS.primary);
    const showDrawerMenu = () => navigation.openDrawer();

    // filter by price type
    const filterData = (price) => (DATA.restaurents).filter((result) => result.price === price );
    return(
        // <View>
        //     <View style={styles.top}>
        //         <View style={styles.searchBox}>
        //             <Icon name="search" size={25} color={COLORS.grey} />
        //             <TextInput placeholder="what you like to eat?" style={styles.search} />
        //         </View>
        //     </View>
        //     <ScrollView>
        //         <Restaurent title="Cost Effective" data={filterData('$')} navigation={navigation} />
        //         <Restaurent title="Bit Pricer" data={filterData('$$')} navigation={navigation} />
        //         <Restaurent title="Big Spender" data={filterData('$$$')} navigation={navigation} />
        //         <View style={{ height: 80 }}/>
        //     </ScrollView>
        // </View>

        <Container disableLast>
        <View style={styles1.header}>
          <TouchableOpacity onPress={showDrawerMenu} style={styles1.btnMenu}>
            <Image style={styles1.menuIcon} source={require('../../assets/images/horizontal-line.png')} />
          </TouchableOpacity>
          <Pressable  style={styles1.headerTitle}>
            <Observer>
              {() => (
                <React.Fragment>
                  <View style={styles1.headerTitleLine1}>
                    <FText color={Colors.typography_40} fontSize="small" lineHeightRatio={1.22}>
                      Current Location{' '}
                    </FText>
                    <Image style={styles1.chevronDown} source={require('../../assets/images/chevron-down.png')} />
                  </View>
                  <FText numberOfLines={1} fontSize={15} color={Colors.primary}>
                 Gaborone, Botswana
                  </FText>
                </React.Fragment>
              )}
            </Observer>
          </Pressable>
          <TouchableOpacity style={styles1.btnMenu}>
            <Observer>{() => 
                <Image style={styles1.avatar} source={{ uri: 'https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-square-FS-77.jpg'}} />}
                </Observer>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles1.mainContainer}>
          <FText style={{
            textAlign: 'center'
          }} color={Colors.typography_80} fontSize="h4" fontWeight={800} lineHeightRatio={1.25}>
             Dot Delivery
          </FText>
          <View style={styles1.searchInputContainer}>
          <Pressable style={{ flex: 1 }}>
            <FInput
              placeholder="Find Restaurants near you.."
              icon={<SearchSvg />}
              inputContainerStyle={styles1.inputContainer}
            />
          </Pressable>
          <TouchableOpacity style={styles1.btnFilter}>
            <Image style={styles1.filterIcon} source={require('../../assets/images/filter.png')} />
          </TouchableOpacity>
        </View>
          <FoodCategoryList />
          <View style={styles1.sectionContainer}>
            <View style={styles1.sectionHeader}>
              <FText fontSize="medium" fontWeight={700}>
                Top Rated Restaurants
              </FText>
              <TouchableOpacity style={styles1.btnViewAll}>
                <FText fontSize={13} color={COLORS.primary}>
                  View All{' '}
                </FText>
                <ChevronRightSvg color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Restaurent title="Cost Effective" data={filterData('$')} navigation={navigation} />
            </View>
          <View style={styles1.sectionContainer}>
            <View style={styles1.sectionHeader}>
              <FText fontSize="medium" fontWeight={700}>
                Top Rated Menus
              </FText>
              <TouchableOpacity style={styles1.btnViewAll}>
                <FText fontSize={13} color={COLORS.primary}>
                  View All{' '}
                </FText>
                <ChevronRightSvg color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Menu title="Cost Effective" data={filterData('$')} navigation={navigation} />
            </View>

            <View style={styles1.sectionContainer}>
            <View style={styles1.sectionHeader}>
              <FText fontSize="medium" fontWeight={700}>
                New Arrivals Meals
              </FText>
              <TouchableOpacity style={styles1.btnViewAll}>
                <FText fontSize={13} color={COLORS.primary}>
                  View All{' '}
                </FText>
                <ChevronRightSvg color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Meals title="Cost Effective" data={filterData('$')} navigation={navigation} />
            </View>

            <View style={styles1.sectionContainer}>
            <View style={styles1.sectionHeader}>
              <FText fontSize="medium" fontWeight={700}>
                Gifts and Offers
              </FText>
              <TouchableOpacity style={styles1.btnViewAll}>
                <FText fontSize={13} color={COLORS.primary}>
                  View All{' '}
                </FText>
                <ChevronRightSvg color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Meals title="Cost Effective" data={filterData('$')} navigation={navigation} />
            </View>
        </ScrollView>
      </Container>
    )
}

export default HomeScreen;


const styles1 = StyleSheet.create({
    menuIcon: {
      width: setXAxisValue(12),
      height: setYAxisValue(6)
    },
    btnMenu: {
      height: setValue(38),
      width: setValue(38),
      borderRadius: setValue(10),
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.05,
      shadowRadius: 4.65,
  
      elevation: 6
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: setValue(10),
      backgroundColor: Colors.gray_40
    },
    chevronDown: {
      width: setValue(6.64),
      height: setValue(3.32)
    },
    headerTitleLine1: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: setYAxisValue(3)
    },
    headerTitle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: setXAxisValue(20)
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: setXAxisValue(26),
      backgroundColor: Colors.white,
      marginTop:5
    },
    mainContainer: {
      marginTop: setYAxisValue(30),
      paddingLeft: setXAxisValue(26),
      flex: 1,
      overflow: 'hidden'
    },
    filterIcon: {
      width: setValue(18),
      height: setValue(18)
    },
    btnFilter: {
      width: setValue(51),
      height: setValue(51),
      borderRadius: setValue(10),
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Colors.primary,
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
  
      elevation: 5,
      marginLeft: setXAxisValue(15),
      marginRight: 2
    },
    inputContainer: {
      height: setYAxisValue(51)
    },
    searchInputContainer: {
      flexDirection: 'row',
      marginVertical: setYAxisValue(26),
      paddingRight: setXAxisValue(26)
    },
    sectionContainer: {
      marginTop: setYAxisValue(26)
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: setXAxisValue(26),
      marginBottom: setYAxisValue(15)
    },
    btnViewAll: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    popularItem: {
      marginTop: setYAxisValue(9)
    }
  });