import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

function ItemPostCategory({ route, navigation }) {
    const { setSelectedMethod } = route.params;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://10.0.2.2:44344/api/v1/Category')
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                // handle error
                //alert(error.message);
            })
    }, []);

    const listCategory = categories.map((category, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => {
                setSelectedMethod(category);
                navigation.goBack();
            }}>
                <View style={styles.categoryItem}>
                    <Text style={styles.categoryTitle}> {category.CategoryName} </Text>
                </View>
            </TouchableOpacity>
        );
    })

    return (
        <ScrollView style={styles.categoryList}>
            {listCategory}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#d2d4db',
        padding: 13
    },
    categoryTitle: {
        width: '100%'
    }
})

export default ItemPostCategory;