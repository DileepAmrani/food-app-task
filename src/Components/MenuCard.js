import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const MenuCard = (props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles._container}>
      <ImageBackground
        source={{
          uri:
            'https://barefeetinthekitchen.com/wp-content/uploads/2014/03/Sticky-Asian-Chicken-4-1-of-1.jpg',
        }}
        style={styles._image}></ImageBackground>

      {isShow === true ? (
        <View style={styles._itemList}>
          <View style={styles._item}>
            <View style={styles._itemDetail}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._name}>Beef</Text>
                <Text style={styles._nameBold}>Roaster</Text>
              </View>
              <Text style={styles._prize}>$ 5.57</Text>
            </View>
            <Text style={styles._detail}>
              Lormetazepam, sold under the brand among others.
            </Text>
          </View>
          <View style={styles._item}>
            <View style={styles._itemDetail}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._name}>Beef</Text>
                <Text style={styles._nameBold}>Roaster</Text>
              </View>
              <Text style={styles._prize}>$ 5.57</Text>
            </View>
            <Text style={styles._detail}>
              Lormetazepam, sold under the brand among others.
            </Text>
          </View>

          <View style={styles._item}>
            <View style={styles._itemDetail}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._name}>Beef</Text>
                <Text style={styles._nameBold}>Roaster</Text>
              </View>
              <Text style={styles._prize}>$ 5.57</Text>
            </View>
            <Text style={styles._detail}>
              Lormetazepam, sold under the brand among others.
            </Text>
          </View>

          <View style={styles._item}>
            <View style={styles._itemDetail}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._name}>Beef</Text>
                <Text style={styles._nameBold}>Roaster</Text>
              </View>
              <Text style={styles._prize}>$ 5.57</Text>
            </View>
            <Text style={styles._detail}>
              Lormetazepam, sold under the brand among others.
            </Text>
          </View>

          <View style={styles._item}>
            <View style={styles._itemDetail}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles._name}>Beef</Text>
                <Text style={styles._nameBold}>Roaster</Text>
              </View>
              <Text style={styles._prize}>$ 5.57</Text>
            </View>
            <Text style={styles._detail}>
              Lormetazepam, sold under the brand among others.
            </Text>
          </View>
        </View>
      ) : null}

      <View style={styles._nameContainer}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles._name, styles._color]}>1st Week</Text>
            <Text style={[styles._nameNold, styles._color]}>MENU</Text>
          </View>
          <View>
            <Text style={[styles._name, styles._color]}>$50.99</Text>
          </View>
        </View>

        <View style={styles._buttonContainer}>
          <TouchableOpacity style={styles._button} onPress={()=>setIsShow(!isShow)}>
            <Text style={styles._buttonText}>VIEW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
let styles = StyleSheet.create({
  _container:{
    margin: 2
  },
  _image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
    height: 150,
  },
  _itemList: {
    backgroundColor: 'lightgray',
    padding: 5,
  },
  _item: {
    padding: 3,
    marginVertical: 10,
  },
  _itemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _color: {
    color: '#fff',
  },
  _prize: {
    color: '#D70F65',
    fontWeight: 'bold',
    fontSize: 15,
  },
  _detail: {
    fontSize: 14,
    color: 'gray',
  },
  _nameContainer: {
    backgroundColor: '#252222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 2,
    opacity: 0.8,
  },
  _name: {
    fontSize: 15,
    paddingHorizontal: 2,
  },
  _nameBold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  _button: {
    backgroundColor: '#D70F65',
    paddingVertical: 5,
    paddingHorizontal: 4,
    borderRadius: 2,
    margin: 5,
  },
  _buttonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MenuCard;
