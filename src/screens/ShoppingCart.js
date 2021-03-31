import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    ScrollView,
} from 'react-native';

function ShoppingCart({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/mascot2x.png')} style={{
                width: 100,
                height: 120
            }} />
            <Text>Không có sản phẩm nào trong giỏ hàng của bạn.</Text>
            <Button title="Tiếp tục mua sắm" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};
export default ShoppingCart;

const style = StyleSheet.create({

})
