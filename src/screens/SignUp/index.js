import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/theme';
import Container from "../../components/Container";
// import FoodCarousel from "../../components/FoodCarousel"
import FInput from "../../components/FInput";
// import FoodCategoryList from "../../components/FoodCategoryList";
import FText from "../../components/FText";
// import RestaurantCarousel from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome';
import Restaurent from "../../components/Restaurant";
import DATA from "../../data/data.json";
import { setValue, setXAxisValue, setYAxisValue, toCorrectImageUri } from '../../utils';
import { Colors } from '../../constants/colors';
import { Observer, observer } from 'mobx-react-lite';
import { ChevronRightSvg, SearchSvg } from '../../assets/svg';
import BackButton from "../../components/BackButton"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = ({ navigation }) => {
    return(
        // <View style={styles.container}>
        //     <ImageBackground
        //         source={require('../../assets/background.png')}
        //         style={{
        //             flex: 1
        //         }}
        //         resizeMode= "cover"
        //     >
        //         <ScrollView>
        //             <View style={styles.topContainer}>
        //                 <Text style={styles.title}>Get Started</Text>
        //                 <Text style={styles.subtitle}>Sign up to continue</Text>
        //             </View>
        //             <View style={styles.dataContainer}>
        //                 <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor={COLORS.white} />
        //                 <TextInput placeholder='Contact Number' style={styles.textinput} placeholderTextColor={COLORS.white} />
        //                 <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.white} />
        //             </View>
        //             <View style={styles.btnContainer}>
        //                 <TouchableOpacity onPress={() => {}}>
        //                     <View style={styles.button1}>
        //                         <Text style={styles.btnText}>SIGN UP</Text>
        //                     </View>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity onPress={() => {}}>
        //                     <View style={styles.button2}>
        //                         <View style={styles.logo}>
        //                             <Image source={require('../../assets/facebook.png')} 
        //                                 resizeMode="contain"   
        //                                 style={{
        //                                     width: 30,
        //                                     height: 30,
        //                                 }}
        //                             />
        //                         </View>
        //                         <Text style={styles.btnText}>Sign In with facebook</Text>
        //                     </View>
        //                 </TouchableOpacity>
        //             </View>
        //             <View style={styles.bottomContainer}>
        //                 <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        //                     <Text style={styles.text}>Already have an account? | Sign In</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </ScrollView>
        //     </ImageBackground>
        // </View>
        <View style={styles.container}>
        <ImageBackground
        source={require('../../assets/background.png')}
        style={{
            flex: 1
        }}
        resizeMode= "cover"
    >
        <BackButton />
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }} scrollEnabled={false}>
          <View style={styles1.mainContainer}>
          <View style={styles.topContainer}>
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.subtitle}>Sign up to continue</Text>
      </View>
            <Observer>
              {() => (
                <FInput
                  containerStyle={styles1.inputContainer}
                  placeholder="Enter your full name"
                />
              )}
            </Observer>
            <Observer>
              {() => (
                <FInput
                  containerStyle={styles1.inputContainer}
                  placeholder="Enter your E-mail or Phone number"
                />
              )}
            </Observer>
            <Observer>
              {() => (
                <FInput
                  containerStyle={styles1.inputContainer}
                  placeholder="Enter your password"
                />
              )}
            </Observer>
          </View>
          <TouchableOpacity  style={styles1.btnSignUp}>
            <FText color={Colors.white} fontWeight="700">
              SIGN UP
            </FText>
          </TouchableOpacity>
          <View style={styles1.alreadyHaveAccount}>
            <FText 
            style={{
              color: COLORS.grey
            }}
            fontSize={14}>
              Already have an account?
              <FText onPress={() => navigation.navigate("SignIn")} fontSize={14} color={COLORS.primary} >
                {' '}
                Login{' '}
              </FText>
            </FText>
          </View>
          <View style={styles1.signInSection}>
            <View style={styles1.grayLine} />
            <FText style={styles1.signInTxt} fontSize="small" color={COLORS.grey}>
              sign in with
            </FText>
            <View style={styles1.grayLine} />
          </View>
          <View style={styles1.loginWithGroupBtn}>
            <TouchableOpacity style={styles1.loginWithBtn}>
              <Image style={styles1.brandIcon} source={require('../../assets/images/facebook-circle.png')} />
              <FText fontSize={13}>FACEBOOK</FText>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.loginWithBtn}>
              <Image style={styles1.brandIcon} source={require('../../assets/images/google-circle.png')} />
              <FText fontSize={13}>GOOGLE</FText>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
    </ImageBackground>
    
      </View>
    )
}

export default SignUpScreen;

const styles1 = StyleSheet.create({
    topDecorContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -setYAxisValue(20)
    },
    shape: {
      position: 'absolute',
      height: setValue(181),
      width: setValue(181),
      borderRadius: setValue(90),
      backgroundColor: COLORS.primary,
      top: -setValue(90),
      right: -setValue(90)
    },
    shape2: {
      top: setValue(-90),
      left: 0,
      backgroundColor: Colors.primary_40
    },
    shape3: {
      justifyContent: 'center',
      alignItems: 'center',
      top: -setValue(80),
      left: -setValue(90),
      zIndex: -1
    },
    innerShape: {
      height: setValue(90),
      width: setValue(90),
      borderRadius: setValue(45),
      backgroundColor: Colors.white
    },
    mainContainer: {
      marginTop: setYAxisValue(25),
      paddingHorizontal: setXAxisValue(26)
    },
    inputContainer: {
      marginTop: setYAxisValue(25)
    },
    btnSignUp: {
      alignSelf: 'center',
      marginTop: setYAxisValue(30),
      height: setYAxisValue(60),
      width: setXAxisValue(248),
      borderRadius: setYAxisValue(30),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5
    },
    alreadyHaveAccount: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: setYAxisValue(25)
    },
    signInSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: setYAxisValue(30),
      flex: 1
    },
    grayLine: {
      width: setXAxisValue(84),
      height: 1,
      backgroundColor: Colors.typography_20
    },
    signInTxt: {
      lineHeight: setYAxisValue(16),
      marginHorizontal: setXAxisValue(15)
    },
    loginWithBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      width: setXAxisValue(139),
      height: setYAxisValue(54),
      borderRadius: setXAxisValue(27),
      backgroundColor: Colors.white,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5
    },
    brandIcon: {
      height: setValue(28),
      width: setValue(28),
      marginLeft: setXAxisValue(13),
      marginRight: setXAxisValue(10)
    },
    loginWithGroupBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: setYAxisValue(20)
    }
  });