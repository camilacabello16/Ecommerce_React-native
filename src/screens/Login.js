import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
    const [user, setUser] = useState({});

    const getSavedUser = async () => {
        try {
            const savedUsername = await AsyncStorage.getItem("username");
            const savedPassword = await AsyncStorage.getItem("password");
            setUser({
                username: savedUsername,
                password: savedPassword
            });
        }
        catch (e) {
            console.log(e);
        }

    }

    const removeSavedUser = async () => {
        try {
            await AsyncStorage.removeItem("username");
            await AsyncStorage.removeItem("password");
            setUser({});
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getSavedUser();
    }, []);

    return (
        <Formik
            initialValues={{
                username: user.username,
                password: user.password
            }}
            onSubmit={async (values) =>
                await axios
                    .get('http://10.0.2.2:44344/api/v1/User/' + values.username + '/' + values.password)
                    .then(async (response) => {
                        if (response && response.data) {
                            console.log(response.data);
                            try {
                                await AsyncStorage.setItem("username", response.data[0].UserName);
                                await AsyncStorage.setItem("password", response.data[0].Password);
                                Alert.alert("Thông báo", "Đăng nhập thành công");
                                navigation.goBack();
                            }
                            catch (e) {
                                console.log(e);
                                Alert.alert("Thông báo", "Đăng nhập không thành công, Xin vui lòng thử lại");
                            }
                        }
                        else {
                            Alert.alert("Thông báo", "Tài khoản hoặc mật khẩu không chính xác");
                        }
                    })
                    .catch(err => {
                        alert("Thông báo", "Bạn chưa nhập tài khoản/mật khẩu");
                    })
            }
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        // onChangeText={text => setusername(text)}
                        onBlur={handleBlur('username')}
                        onChangeText={handleChange('username')}
                        value={values.username}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Mật khẩu"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        // onChangeText={text => setpassword(text)}
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        secureTextEntry={true}
                        value={values.password}
                    />
                    {/* <Text>{values.username} và {values.password}</Text>
                    <Text>Đã lưu: {user.username} và {user.password}</Text> */}
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            // onPress={() => saveUser(username)}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.submitButtonText}> Đăng Nhập </Text>
                        </TouchableOpacity>
                        <View style={styles.signUpAlert}>
                            <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản? </Text>
                            <Text
                                style={styles.signUpTxt}
                                onPress={() => navigation.navigate('Register')}
                            >Đăng ký</Text>
                        </View>

                        {/* <Button title="Đăng ký" onPress={() => navigation.navigate('Register')} /> */}
                    </View>
                </View>
            )
            }
        </Formik >

    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    },
    input: {
        marginVertical: 10,
        height: 40,
        borderColor: '#00C8C8',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    submitButton: {
        backgroundColor: '#00C8C8',
        color: '#000',
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
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    signUpAlert: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signUpTxt: {
        color: '#00C8C8',
        fontSize: 16
    }
})