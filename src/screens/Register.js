import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';

function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Formik
            initialValues={{
                UserName: '',
                Password: '',
                Fullname: '',
                PhoneNumber: '',
                Address: ''
            }}
            onSubmit={values => axios.post('http://10.0.2.2:44344/api/v1/User', values)
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                })
            }
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        name="UserName"
                        underlineColorAndroid="transparent"
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('UserName')}
                        value={values.UserName}
                    />
                    <TextInput
                        style={styles.input}
                        name="Password"
                        underlineColorAndroid="transparent"
                        placeholder="Mật khẩu"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('Password')}
                        value={values.Password}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        name="Fullname"
                        underlineColorAndroid="transparent"
                        placeholder="Họ và tên"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('Fullname')}
                        value={values.Fullname}
                    />
                    <TextInput
                        style={styles.input}
                        name="PhoneNumber"
                        underlineColorAndroid="transparent"
                        placeholder="Số điện thoại"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('PhoneNumber')}
                        value={values.PhoneNumber}
                    />
                    <TextInput
                        style={styles.input}
                        name="Address"
                        underlineColorAndroid="transparent"
                        placeholder="Địa chỉ"
                        placeholderTextColor="#d2d4db"
                        autoCapitalize="none"
                        onChangeText={handleChange('Address')}
                        value={values.Address}
                    />
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.submitButtonText}> Đăng Ký </Text>
                        </TouchableOpacity>
                        <View style={styles.signUpAlert}>
                            <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản? </Text>
                            <Text
                                style={styles.signUpTxt}
                                onPress={() => navigation.navigate('Login')}
                            >Đăng nhập</Text>
                        </View>
                        {/* <Text>Bạn đã có tài khoản?</Text>
                <Button title="Đăng nhập" style={styles.buttonRegister} onPress={() => navigation.navigate('Login')} /> */}
                    </View>
                </View>
            )}
        </Formik>

    )
}
export default Register;

const styles = StyleSheet.create({
    container: {
        padding: 10
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

    },
    buttonRegister: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
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