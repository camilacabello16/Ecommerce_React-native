
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
import { useForceUpdate } from '../hooks/useForceUpdate';

const { width } = Dimensions.get('window');

const Myitem = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState();
    const [userProduct, setUserProduct] = useState([]);
    const defaultUserId = 'f6470938-a69b-11eb-8a1f-00163e047e89';
    const forceUpdate = useForceUpdate();

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

    const renderProduct = userProduct.map((product, index) => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: 'center'
            }}
                key={index}
            >
                <View>
                    <Image
                        source={{
                            uri: product.ProductImage
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
                    <Text>{product.ProductName}</Text>
                    <Text style={{ marginTop: 10 }}>{product.ProductPrice}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        style={{ marginBottom: 10 }}
                        title="SỬA"
                        onPress={() => navigation.navigate('EditItem', {
                            productEdit: product
                        })}
                    />
                    <Button style={{ marginTop: 10 }} title="XÓA" onPress={() => handleDeleteProduct(product.ProductId)} />
                </View>
            </View>
        )
    });

    const handleDeleteProduct = (id) => {
        console.log(id);
        axios.delete('http://10.0.2.2:44344/api/v1/Product/' + id)
            .then(resp => console.log(resp));
        forceUpdate();
    }

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