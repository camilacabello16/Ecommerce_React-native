import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../components/HomeSectionComponents';


const HomeScreen = ({ navigation }) => {
  const [numberCartProduct, setNumberCartProduct] = useState(16);

  return (
    <View style={styles.screenContainer}>
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={20} color="#969696" />
          <TextInput placeholder="Bạn cần tìm gì hôm nay?" style={styles.inputText} />
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={25} color="#fff" onPress={() => navigation.navigate('ShoppingCart')} />
          <Text style={styles.numberCart}>{numberCartProduct}</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Image source={require('../assets/section_banner.png')} style={styles.sectionImage} />
          <HomeSectionComponent navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  inputText: {
    color: '#969696',
    fontSize: 15,
    marginLeft: 8,
    padding: 5,
    height: 30,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionImage: {
    width: '100%',
    height: 130,
    borderRadius: 4,
  },
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  numberCart: {
    position: 'absolute',
    top: -2,
    right: 12,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 100,
    textAlign: 'center',
    color: '#fff',
    lineHeight: 22
  }
});

export default HomeScreen;
