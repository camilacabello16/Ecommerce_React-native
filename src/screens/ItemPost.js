import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { launchImageLibrary } from 'react-native-image-picker';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

function ItemPost({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleTitle = (text) => {
        setTitle(text);
    }

    const handleDescription = (text) => {
        setdescription(text);
    }
    const handlePrice = (text) => {
        setPrice(text);
    }

    const handleUploadImage = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log(source);
            }
        });
    }

    const check = (title, description, price) => {
        alert('title: ' + title + 'description: ' + description + 'price: ' + price)
    }

    return (
        <View style={styles.container}>
            <Button title="Upload image" onPress={handleUploadImage} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="title"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleTitle} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="description"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleDescription} />
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="price"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handlePrice} />

            <View style={styles.wrapperButton}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => check(title, description, price)
                    }
                >
                    <Text style={styles.submitButtonText}> Đăng Bài </Text>
                </TouchableOpacity>
                {/* <Text>Bạn đã có tài khoản?</Text>
                <Button title="Đăng nhập" style={styles.buttonRegister} onPress={() => navigation.navigate('Login')} /> */}
            </View>
        </View>
    )
}
export default ItemPost;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        marginVertical: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    submitButton: {
        backgroundColor: '#7a42f4',
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
        width: '100%',
        marginTop: 10,

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
        color: '#7a42f4',
        fontSize: 16
    }
})