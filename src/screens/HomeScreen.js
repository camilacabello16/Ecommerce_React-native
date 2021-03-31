import React from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../components/HomeSectionComponents';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      {/*  */}
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={30} color="#969696" />
          <TextInput placeholder="Bạn cần tìm gì hôm nay?" style={styles.inputText} />
        </View>
        {/*  */}
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={30} color="#fff" onPress={() => navigation.navigate('ShoppingCart')} />
        </View>
      </View>
      {/*  */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
          <HomeSectionComponent />
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
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
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
  //
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
