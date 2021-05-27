import React from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput } from 'react-native';
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

const Support = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.bodyContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="search" size={30} color="#969696" />
                    <TextInput placeholder="Bạn cần tìm gì hôm nay?" style={styles.inputText} />
                </View>
                {/*  */}
                <View style={styles.divider} />
                {/* <View style={styles.itemContainer}>
                    <Text style={[styles.itemText]} onPress={() => navigation.navigate('Register')}>Quản lý đơn hàng</Text>
                    <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress={() => navigation.navigate('Register')} />
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
                </View> */}

                <ProfileItem icon="format-list-bulleted" name="Tại Sao Tài Khoản Của Tôi Bị Khóa/Bị Giới Hạn?" />
                <ProfileItem icon="cart-outline" name="Tại Sao Tôi Không Nhận Được Mã Xác Minh?" />
                <ProfileItem icon="eye-outline" name="Tôi Không Thể Đặt Hàng?" />
                <ProfileItem icon="heart-outline" name="Trần Thanh Hải 1" />
                <ProfileItem icon="bookmark-outline" name="Trần Thanh Hải 1" />
                <ProfileItem icon="star-outline" name="Trần Thanh Hải 1" />
                {/*  */}
                <View style={styles.divider} />
                <ProfileItem name="Live Chat" />
                <ProfileItem name="Email" />
                <ProfileItem name="Điện thoại" />
                {/*  */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
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
    bodyContainer: {
        flex: 0.775,
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

export default Support;
