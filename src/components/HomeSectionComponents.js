import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');

const section_banner = require('../assets/section_banner.png');
const item_image_1 = require('../assets/item_image_1.png');
const item_image_2 = require('../assets/item_image_2.png');
const item_image_3 = require('../assets/item_image_3.png');
const item_image_4 = require('../assets/item_image_4.png');

const ProductItem = ({ image, name, price, navigation }) => (
  <View style={styles.itemContainer} >
    <TouchableOpacity onPress={() => navigation.navigate('ItemDetail')}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemName} numberOfLines={2} >
        {name}
      </Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </TouchableOpacity>
  </View>
);

const HomeSectionComponent = ({ navigation }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Iphone 2',
      price: '1000000',
      image: item_image_1
    },
    {
      id: 2,
      name: 'Iphone 3',
      price: '1000000',
      image: item_image_2
    },
    {
      id: 3,
      name: 'Iphone 4',
      price: '1000000',
      image: item_image_3
    },
    {
      id: 4,
      name: 'Iphone 5',
      price: '1000000',
      image: item_image_4
    },
    {
      id: 5,
      name: 'Iphone 6',
      price: '1000000',
      image: item_image_1
    },
    {
      id: 6,
      name: 'Iphone 7',
      price: '1000000',
      image: item_image_2
    },
    {
      id: 7,
      name: 'Iphone 8',
      price: '1000000',
      image: item_image_3
    },
    {
      id: 9,
      name: 'Iphone X',
      price: '1000000',
      image: item_image_4
    },
  ]);

  const renderProduct = products.map((product, index) => {
    return (
      <ProductItem
        image={product.image}
        name={product.name}
        price={product.price}
        navigation={navigation}
      />
    );
  })

  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectnionTitle} >Điện thoại - Máy tính bảng</Text>
      {/*  */}
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            'Tất cả',
            'Điện thoại SmartPhone',
            'Máy tính bảng',
            'Điện thoại',
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }
                onPress={() => navigation.navigate('Login')}
              >
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <ScrollView>
        <View style={styles.listItemContainer}>
          {renderProduct}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText} onPress={() => navigation.navigate('ItemPost')}>XEM TẤT CẢ SẢN PHẨM </Text>
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between'
  },
  itemContainer: {
    width: '49%',
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
    padding: 16,
    paddingTop: 25
  },
  itemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain'
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