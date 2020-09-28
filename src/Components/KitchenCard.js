import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const KitchenCard = (props) => {
  return (
    <ImageBackground
      source={{
        uri:
          props.image,
      }}
      style={styles.image}>
      <View style={styles._nameContainer}>
        <View style={{flexDirection: "row"}}>
    <Text style={styles._nameBold}>{props.name}</Text>
        </View>
          
        <View style={styles._buttonContainer}>
          <TouchableOpacity style={styles._button} onPress={props.onPress}>
            <Text style={styles._buttonText}>VIEW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
};
export default KitchenCard;
let styles = StyleSheet.create({
  _input: {
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
    height: 160,
  },
  _nameContainer: {
    backgroundColor: '#252222',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    paddingVertical: 8,
    paddingHorizontal: 2,
    opacity: .8
  },
  _nameBold: {
    color: '#fff',
    fontSize: 10,
    paddingVertical: 5,
    fontWeight: "bold"
  },
  _button: {
    backgroundColor: '#D70F65',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  _buttonText: {
    fontSize: 10,
    color: '#fff',
  },
});
