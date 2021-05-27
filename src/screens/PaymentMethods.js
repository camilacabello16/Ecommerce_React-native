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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function PaymentMethods({ navigation }) {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <View style={styles.paymentMethodPage}>
                    <View style={styles.paymentMethodItem}>
                        <FontAwesome name="shopping-cart" size={30} color="#00C8C8" />
                        <Text style={styles.paymentTxt}> Ví Airpay</Text>
                    </View>
                    <View style={styles.paymentMethodItem}>
                        <FontAwesome name="credit-card-alt" size={25} color="#00C8C8" />
                        <Text style={styles.paymentTxt}> Thẻ tín dụng/Ghi nợ</Text>
                    </View>
                    <View style={styles.paymentMethodItemLast}>
                        <FontAwesome name="money" size={30} color="#00C8C8" />
                        <Text style={styles.paymentTxt}> Thanh toán khi nhận hàng</Text>
                    </View>
                </View>

            </ScrollView>
            <View style={styles.wrapButton}>
                <Button style={{ color: "#00C8C8!important" }} title="Đồng ý"></Button>
            </View>
        </View>
    );
}
export default PaymentMethods;
const styles = StyleSheet.create({
    paymentMethodItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    paymentMethodItemLast: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingVertical: 10,
    },
    paymentMethodPage: {
        marginTop: 20
    },
    paymentTxt: {
        fontSize: 17,
        marginLeft: 10
    },
    wrapButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 7
    }
})