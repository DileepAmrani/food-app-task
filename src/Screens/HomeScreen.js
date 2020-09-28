import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {KitchenCard} from './../Components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = (props) => {
  const [card, setCard] = useState([
    {
      name: 'Cafe Beirut',
      image:
        'https://www.foodies.pk/wp-content/uploads/2019/04/Manakish-Lebanese-Famous-Dish.jpg',
    },

    {
      name: 'KOLACHI',
      image:
        'https://prostudentt.files.wordpress.com/2015/07/552601_522572177779288_61170963_n.jpg',
    },

    {
      name: 'KANNA',
      image:
        'https://www.a-designstudios.com/wp-content/uploads/2018/09/kanna-logo.jpg',
    },
    {
      name: 'COCOS DEN',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/02/49/ee/f9/cuckoo-s-den.jpg',
    },
    ,
    {
      name: 'Spice Bazaar',
      image:
        'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/63/medium_istanbul_spice_market_interior2.jpg',
    },
    {
      name: 'KFC',
      image:
        'https://i.pinimg.com/originals/4f/a2/91/4fa291fc7c8d2811958c1f8f06e70cdd.jpg',
    },
    {
      name: 'Mirchi 360',
      image:
        'https://www.rewaj.com/wp-content/uploads/2010/05/paratha-roll-kebab-roll.jpg',
    },
    {
      name: 'COCOS DEN',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/02/49/ee/f9/cuckoo-s-den.jpg',
    },
    {
      name: 'Spice Bazaar',
      image:
        'https://istanbultourstudio.s3.amazonaws.com/uploads/media_content/picture/63/medium_istanbul_spice_market_interior2.jpg',
    },
    {
      name: 'KFC',
      image:
        'https://i.pinimg.com/originals/4f/a2/91/4fa291fc7c8d2811958c1f8f06e70cdd.jpg',
    },
    {
      name: 'Mirchi 360',
      image:
        'https://www.rewaj.com/wp-content/uploads/2010/05/paratha-roll-kebab-roll.jpg',
    },
    {
      name: 'COCOS DEN',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/02/49/ee/f9/cuckoo-s-den.jpg',
    },
  ]);

  openFilter = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles._container}>
      <View style={{padding: 5}}>
        <View style={styles._header}>
          <View>
            <Image
              style={styles._logo}
              source={{
                uri:
                  'https://static.tacdn.com/img2/brand_refresh/application_icons/post-image-550x370.png',
              }}
            />
          </View>

          <View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={styles._icons}>
                <AntDesign name="shoppingcart" size={25} />
              </View>
              <View>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri:
                      'https://studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg',
                  }}
                />
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles._tinyIcons}>
                <View>
                  <Ionicons name="ios-time-outline" size={12} color="#E35F92" />
                </View>
                <Text style={styles._tinyText}>Make Query 24/7</Text>
              </View>
              <View style={styles._tinyIcons}>
                <View>
                  <Ionicons name="call-sharp" size={12} color="#E35F92" />
                </View>
                <Text style={styles._tinyText}>021 39992345</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles._searchContainer}>
          <View>
            <AntDesign name="search1" size={25} color="#E35F92" />
          </View>
          <View style={{flex: 1}}>
            <TextInput placeholder="Search" style={{height: 40}} />
          </View>
          <View
            style={{backgroundColor: '#D71061', height: '100%', padding: 8}}>
            <Ionicons
              name="filter"
              onPress={() => openFilter()}
              size={25}
              color="#fff"
            />
          </View>
        </View>

        <View style={styles._navigationBar}>
          <View style={[styles._navItems, styles._active]}>
            <TouchableOpacity>
              <Text style={styles._activeText}>KITCHENS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles._contentBox}>
          <View style={styles._boxes}>
            {card.map((v, i) => {
              return (
                <View style={styles._box}>
                  <KitchenCard
                    onPress={() => props.navigation.navigate('KitchenDetail')}
                    name={v.name}
                    image={v.image}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles._footer}>
        <View style={styles._btnContainer}>
          <View style={styles._barIcon}>
            <Image
              source={require('./../Assets/dish.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={styles._barText}>Filter By Kitchen</Text>
          </View>
        </View>

        <View style={styles._btnContainer}>
          <View style={styles._barIcon}>
            <Image
              source={require('./../Assets/spoon-and-fork-crossed.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={styles._barText}>Filter By Menu</Text>
          </View>
        </View>
        <View style={styles._addIcon}>
          <Entypo name="arrow-long-right" size={30} color="#fff" />
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
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
  },
  _contentBox: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    paddingBottom: 60,
  },
  _icons: {
    margin: 5,
  },
  _tinyIcons: {
    margin: 5,
    flexDirection: 'row',
  },
  _tinyText: {
    fontSize: 10,
    paddingLeft: 4,
  },
  _searchContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#E8BECE',
    borderRadius: 5,
  },

  _navigationBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  _active: {
    backgroundColor: '#D70F65',
    borderRadius: 2,
  },
  _activeText: {
    color: '#fff',
  },
  _navItems: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  _logo: {
    width: 140,
    height: 60,
  },
  _cardContainer: {
    flexDirection: 'row',
    display: 'flex',
  },
  _card: {
    width: 100,
  },
  _boxes: {
    // display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 1,width:"100%",
    // justifyContent:"space-evenly"
  },
  _box: {
    margin: 1,
    width: '49%',
    justifyContent: 'center',
    marginVertical: 2,
  },
  _footer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  _btnContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 2 - 0,
    paddingVertical: 5,
  },
  _barIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _barText: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '700',
  },
  _addIcon: {
    position: 'absolute',
    top: -20,
    backgroundColor: '#FF256C',
    borderRadius: 30,
    width: 55,
    height: 55,
    justifyContent: 'center',
    left: '44%',
    alignItems: 'center',
  },
});

export default HomeScreen;
