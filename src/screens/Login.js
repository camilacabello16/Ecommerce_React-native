import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import * as userAction from '../redux/store/action/user';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    // const saveUser = async (data) => {
    //     try {
    //         await AsyncStorage.setItem("USER", JSON.stringify(data))
    //         alert('Data successfully saved')
    //     } catch (e) {
    //         alert('Failed to save the data to the storage')
    //     }
    // }

    return (
        <Formik
            validateOnMount={true}
            initialValues={{
                UserName: '',
                Password: ''
            }}
            onSubmit={values => axios.get('http://10.0.2.2:44344/api/v1/User/' + values.UserName + '/' + values.Password)
                .then((response) => {
                    if (response.data == "") {
                        console.log('null');
                    } else {
                        dispatch(userAction.signInUser(response.data[0]));
                        navigation.navigate('Home');
                    }
                    // AsyncStorage.getItem('USER').then(value => {
                    //     console.log(value);
                    // })
                    // console.log(AsyncStorage.getItem('USER'));
                }, (error) => {
                    console.log(error);
                })}
        >
            {({ handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched, }) => (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('UserName')}
                        value={values.username}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Mật khẩu"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('Password')}
                        secureTextEntry={true}
                        value={values.password}
                    />
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity
                            style={styles.submitButton}
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
            )}
        </Formik>

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
    },
    errorText: {
        fontSize: 15,
        color: 'red',
    },
})