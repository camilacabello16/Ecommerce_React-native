import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
const Header = ({ title, navigation }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export default Header;

const HEADER_ICON_SIZE = 24;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: '#1e88e5',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
