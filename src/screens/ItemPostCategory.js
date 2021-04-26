import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function ItemPostCategory({ route, navigation }) {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Quần áo'
        },
        {
            id: 2,
            name: 'Máy tính & Laptop'
        },
        {
            id: 3,
            name: 'Giày dép'
        },
        {
            id: 4,
            name: 'Đồng hồ'
        },
        {
            id: 5,
            name: 'Ô tô - xe máy - xe đạp'
        },
        {
            id: 6,
            name: 'Đồ chơi'
        },
        {
            id: 7,
            name: 'Thể thao'
        },
        {
            id: 8,
            name: 'Gia dụng'
        },
        {
            id: 9,
            name: 'Túi ví'
        },
        {
            id: 10,
            name: 'Sản phẩm khác'
        },
    ]);

    const listCategory = categories.map((category, index) => {
        return (
            <View style={styles.categoryItem} key={index}>
                <Text
                    style={styles.categoryTitle}
                    onPress={() => navigation.goBack(null, {
                        category: category.name
                    })}
                >{category.name}</Text>
            </View>
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