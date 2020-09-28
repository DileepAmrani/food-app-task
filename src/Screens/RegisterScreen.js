import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {CustomInput, CustomButton} from './../Components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const RegisterScreen = (props) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles._container}>
      <View style={styles._header}>
        <View style={styles._icons}>
          <AntDesign name="shoppingcart" size={25} />
        </View>
        <View style={styles._icons}>
          <Entypo name="home" size={25} />
        </View>
      </View>

      <View style={styles._contentContainer}>
        <View style={styles._formHeading}>
          <FontAwesome name="user" size={30} color="#D70F65" />
          <Text style={styles._headingText}>Sign Up</Text>
        </View>
        <CustomInput placeholder="Enter User Name" />
        <CustomInput placeholder="Enter Password" isPassword={true} />
        <CustomInput placeholder="Enter Address" />
        <CustomInput placeholder="Mobile Number" />

        <View style={styles._termsContainer}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles._checkbox}
            />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles._termsText}>By signing up i accept the</Text>
              <TouchableOpacity>
                <Text style={styles._linkText}> Terms and service</Text>
              </TouchableOpacity>
              <Text style={styles._termsText}> and</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles._linkText}> Privicy Policy.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._buttonContainer}>
          <TouchableOpacity
            style={styles._button}
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Text style={styles._buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles._lineThroughContainer}>
          <View style={styles._line} />
          <View>
            <Text style={styles._middleText}>OR</Text>
          </View>
          <View style={styles._line} />
        </View>

        <View style={styles._socialLogin}>
          <Entypo name="facebook-with-circle" size={25} color="#3D5898" />
          <Entypo name="google--with-circle" size={25} color="#DE4D3E" />
          <Entypo name="twitter-with-circle" size={25} color="#08A9EE" />
        </View>

        <View style={styles._haveAccountContainer}>
          <Text style={{fontWeight: 'bold'}}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles._linkText}>Login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  _contentContainer: {
    paddingHorizontal: 10,
  },
  _icons: {
    margin: 5,
  },
  _formHeading: {
    marginVertical: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  _headingText: {
    fontSize: 20,
    marginLeft: 5,
    borderBottomWidth: 0.5,
    fontWeight: 'bold',
  },
  _termsContainer: {
    flexDirection: 'column',
    marginVertical: 8,
  },
  _checkbox: {},
  _termsText: {
    fontSize: 14,
    lineHeight: 18,
    // paddingTop: 5,
  },
  _linkText: {
    color: '#D70F65',
    fontWeight: 'bold',
    lineHeight: 18,
  },
  _buttonContainer: {
    marginVertical: 20,
  },
  _button: {
    backgroundColor: '#D70F65',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  _buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  _lineThroughContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  _line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CFC9C9',
  },
  _middleText: {
    width: 40,
    textAlign: 'center',
  },
  _socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  _haveAccountContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default RegisterScreen;
