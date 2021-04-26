import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import * as  ImagePicker from 'react-native-image-picker';
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { block } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ItemPost({ route, navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [response, setResponse] = useState();

    const handleTitle = (text) => {
        setTitle(text);
    }

    const handleDescription = (text) => {
        setdescription(text);
    }
    const handlePrice = (text) => {
        setPrice(text);
    }

    const check = (title, description, price) => {
        alert('title: ' + title + 'description: ' + description + 'price: ' + price)
    }

    //const { category } = route.params;
    const [categoryName, setCategoryName] = useState();

    useEffect(() => {
        if (route.params == null) {
            setCategoryName("Chọn danh mục");
        } else {
            setCategoryName(route.params.category);
        }
    });

    const [checkCategory, setCheckCategory] = useState(0);

    function onChooseCategory() {
        setCheckCategory(1);
        console.log(checkCategory);
    }

    return (
        <View style={styles.container}>
            <Button title="Upload image" onPress={() =>
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                    (res) => {
                        setResponse(res);
                    },
                )
            } />

            {response &&
                <Image source={{ uri: response.uri }}
                    style={{ width: 200, height: 200 }}
                />
            }

            <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Tên sản phẩm</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập tên sản phẩm"
                    placeholderTextColor="#d2d4db"
                    autoCapitalize="none"
                    onChangeText={handleTitle} />
            </View>
            <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Mô tả sản phẩm</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập mô tả sản phẩm"
                    placeholderTextColor="#d2d4db"
                    autoCapitalize="none"
                    onChangeText={handleDescription} />
            </View>
            <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Giá</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="#fff"
                    placeholder="Nhập giá sản phẩm"
                    placeholderTextColor="#d2d4db"
                    autoCapitalize="none"
                    onChangeText={handlePrice} />
            </View>
            <View style={styles.wrapInput}>
                <Text style={styles.inputTitle}>Cân nặng</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="#fff"
                    placeholder="Nhập cân nặng sản phẩm"
                    placeholderTextColor="#d2d4db"
                    autoCapitalize="none" />
            </View>
            <View style={styles.wrapInput}>
                <View style={styles.selectCategoryTitle}>
                    <View style={styles.wrapSelect}>
                        <FontAwesome
                            name="list"
                            size={20}
                            color="#000"
                            style={{ marginRight: 10 }}
                        ></FontAwesome>
                        <Text
                            style={styles.selectCategoryTxt}
                            onPress={() => navigation.navigate('ItemPostCategory')}
                        >Danh mục</Text>
                    </View>
                    {checkCategory == 0 &&
                        <Text
                            style={styles.selectCategoryTxt}
                            onPress={() => onChooseCategory()}
                        >Chọn danh mục</Text>
                    }
                    {checkCategory == 1 &&
                        <Text
                            style={styles.selectCategoryTxt}
                            onPress={() => onChooseCategory()}
                        >{route.params.category}</Text>
                    }
                </View>
            </View>
            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => check(title, description, price)
                    }
                    color="#00C8C8"
                >
                    <Text style={styles.submitButtonText}> Đăng Bài </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemPost;

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    input: {
        borderColor: '#fff',
    },
    submitButton: {
        backgroundColor: '#00C8C8',
        // padding: 10,
        height: 40,
        width: '100%',
        textAlign: 'center',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButtonText: {
        color: 'white',
    },
    wrapperButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#d2d4db',
        backgroundColor: '#fff'
    },
    buttonRegister: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSignup: {
        backgroundColor: 'red'
    },
    signUpAlert: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signUpTxt: {
        color: '#d2d4db',
        fontSize: 16
    },
    wrapInput: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10
    },
    selectCategoryTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    wrapSelect: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})