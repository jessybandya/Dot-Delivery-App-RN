import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../../components/BackButton';
import Container from '../../components/Container';
import styles from './styles';
import { isAndroid, setValue, setXAxisValue, setYAxisValue } from '../../utils';
import { Colors } from '../../constants/colors';
import FText from '../../components/FText';
import FInput from '../../components/FInput';
import { COLORS } from '../../constants/theme';

const ForgotPwdScreen = () => {
    return(
        // <View style={styles.container}>
        //     <Text style={styles.title}>Forgot Password</Text>
        //     <Text style={styles.subtitle}>Enter your email address below and we will send you an email with instructions on how to change your password.</Text>
        //     <View>
        //         <TextInput placeholder='Enter your email' style={styles.textinput} />
        //     </View>
        //     <TouchableOpacity onPress={() => {}}>
        //         <View style={styles.button}>
        //             <Text style={styles.buttonTxt}>Send</Text>
        //         </View>
        //     </TouchableOpacity>
        // </View>
        <Container disableFirst>
        <View style={styles1.topDecorContainer}>
          <View style={styles1.shape} />
          <View style={[styles1.shape, styles1.shape2]} />
          <View style={[styles1.shape, styles1.shape3]}>
            <View style={styles1.innerShape} />
          </View>
        </View>
        <BackButton />
        <View style={styles1.container}>
          <View style={styles1.mainContainer}>
            <FText fontWeight="800" fontSize="h4" lineHeightRatio={1.2}>
              Reset Password
            </FText>
            <FText fontWeight={300} fontSize="small">
              Please enter your email address to request a password reset
            </FText>
          </View>
          <View style={styles1.inputContainer}>
            <FInput
              autoFocus
              placeholder="Enter your email"
            />
          </View>
  
          <TouchableOpacity style={styles1.btnLogin}>
            <FText color={Colors.white} fontWeight="700">
              RESET PASSWORD
            </FText>
          </TouchableOpacity>
          {!isAndroid && <KeyboardSpacer />}
        </View>
      </Container>
    )
}

export default ForgotPwdScreen;

const styles1 = StyleSheet.create({
    topDecorContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -setYAxisValue(20)
    },
    container: {
      flex: 1,
      justifyContent: 'center'
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
      marginTop: setYAxisValue(98),
      paddingHorizontal: setXAxisValue(26)
    },
    inputContainer: {
      marginTop: setYAxisValue(25)
    },
    btnLogin: {
      alignSelf: 'center',
      marginTop: setYAxisValue(60),
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
    inputContainer: {
      marginHorizontal: setXAxisValue(26)
    }
  });