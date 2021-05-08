
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const { width } = Dimensions.get('window');

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({ image, name, price, navigation }) => {


    const [checked, setChecked] = useState(false);
    const [text, setText] = useState('');
    const [textPrice, setTextPrice] = useState('');
    return (
        <View style={{
            flexDirection: "row",
            alignItems: 'center'
        }}
        >
            <View>
                <Image
                    source={{
                        uri: image
                    }}
                    style={{
                        width: 80,
                        height: 80,
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'column',
                width: '60%',
                marginLeft: 5,
            }}
            >
                <Text>{name}</Text>
                <Text style={{ marginTop: 10 }}>{price}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button style={{ marginBottom: 10 }} title="SỬA" onPress={() => navigation.navigate('EditItem')} />
                <Button style={{ marginTop: 10 }} title="XÓA" onPress={() => navigation.navigate('Myitem')} />
            </View>
        </View>

    );
}

const Myitem = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState();
    const [userProduct, setUserProduct] = useState([]);
    const defaultUserId = 'f6470938-a69b-11eb-8a1f-00163e047e89';

    useEffect(() => {
        AsyncStorage.getItem("USER").then((value) => {
            setUserInfo(JSON.parse(value));
        }, []);
        // axios.get('http://10.0.2.2:44344/api/v1/Product/user/' + userInfo.UserId)
        //     .then(function (response) {
        //         setUserProduct(response.data)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
    }, []);

    useEffect(() => {
        console.log(defaultUserId);
        setTimeout(() => {
            axios.get('http://10.0.2.2:44344/api/v1/Product/user/' + defaultUserId)
                .then(function (response) {
                    console.log(response);
                    setUserProduct(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }, 200);

    }, [])

    const renderProduct = userProduct.map((product) => {
        return (
            <ProductItem
                image={product.ProductImage}
                name={product.ProductName}
                price={product.ProductPrice}
                navigation={navigation}
            />
        );
    })

    return (
        <View style={styles.sectionContainer}>
            {/*  */}
            <View style={{ flexDirection: "row" }}>
                <Button title="ĐĂNG BÁN" onPress={() => navigation.navigate('ItemPost')} />
            </View>
            <ScrollView>
                <View style={styles.listItemContainer}>
                    {renderProduct}
                </View>
            </ScrollView>
            {/*  */}
        </View >
    );
};

export default Myitem;

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#2f2f2f',
        marginVertical: 12,
    },
    sectionImage: {
        width: width - 24,
        height: 130,
        borderRadius: 4,
    },
    //
    filterContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    filterActiveButtonContainer: {
        backgroundColor: '#242424',
        paddingVertical: 6,
        borderRadius: 4,
        marginRight: 10,
    },
    filterInactiveButtonContainer: {
        backgroundColor: '#fff',
        paddingVertical: 6,
        borderRadius: 4,
        borderColor: '#5a5a5a',
        borderWidth: 1,
        marginRight: 10,
    },
    filterActiveText: {
        color: '#fff',
    },
    filterInactiveText: {
        color: '#5a5a5a',
    },
    //
    listItemContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'space-between'
    },
    itemContainer: {
        width: '100%',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 6,
        paddingTop: 25
    },
    itemName: {
        fontSize: 14,
        color: '#484848',
        marginVertical: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2a2a2a',
    },
    //
    seeMoreContainer: {
        marginTop: 10,
        padding: 12,
        borderTopWidth: 0.6,
        borderTopColor: '#ededed',
        alignItems: 'center',
    },
    seeMoreText: {
        color: '#0e45b4',
    },
});