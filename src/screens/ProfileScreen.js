import React from 'react';
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/HeaderComponent';

const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <Header title="Cá nhân" navigation={navigation} />
      {/*  */}
      <View style={styles.bodyContainer}>
        <Button title="Đăng bán" onPress={() => navigation.navigate('ItemPost')} />
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <MaterialIcons name="person" size={26} color="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
            <Text style={styles.authText} onPress={() => navigation.navigate('ItemDetail')}>Đăng nhập/Đăng ký</Text>
          </View>
          <FontAwesome name="angle-right" size={26} color="#1e88e5" onPress={() => navigation.navigate('Register')} />
        </View>
        {/*  */}
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Myitem')}>Quản lý cửa hàng</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Myitem')} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Sản phẩm đã mua</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Sản phẩm đã xem gần đây</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Sản phẩm yêu thích</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Sản phẩm mua sau</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Sản phẩm đánh giá"</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
        </View>

        {/* <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
        <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye-outline" name="Sản phẩm đã xem gần đây" />
        <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
        <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
        <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" /> */}
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
        <ProfileItem name="Cài đặt" />
        {/*  */}
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText]} onPress={() => navigation.navigate('Support')}>Hỗ trợ</Text>
          <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Support')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    marginLeft: 20,
  },
  //
  divider: {
    height: 10,
  },
});

export default ProfileScreen;
