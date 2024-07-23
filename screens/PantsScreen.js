import React from 'react';

import { Icon } from 'react-native-elements';


import React, { useState, useEffect } from 'react';




import Carousel from 'react-native-reanimated-carousel';


import { useNavigation } from '@react-navigation/native';

const categoryImages = [
    require('./assets/tshirt.jpg'),
    require('./assets/pants.webp'),
    require('./assets/dress.webp'),
    require('./assets/jacket.jpg'),
    require('./assets/underwear.webp'),
    require('./assets/bra.jpg'),
    require('./assets/stock/cotton.jpg'),
    require('./assets/stock/chino.jpg'),
    require('./assets/stock/crew.webp'),
    require('./assets/stock/f.webp'),
    require('./assets/stock/suit.webp'),
    require('./assets/stock/w.jpg'),
    require('./assets/stock/top.jpg'),
];

const PantsScreen = ({ navigation }) => {
    const items = [
        { id: 1, name: 'Men jean', price: 'R700', image: require('./assets/manpants/manpants1.webp') },
        { id: 2, name: 'Ladies Jean', price: 'R400', image: require('./assets/wp/womanpants1.webp') },
        { id: 3, name: 'Men Jean', price: 'R420', image: require('./assets/manpants/manpants2.webp') },
        { id: 4, name: 'Ladies Jeans', price: 'R550', image: require('./assets/wp/womanpants2.webp') },
        { id: 5, name: 'Blue Damin', price: 'R430', image: require('./assets/manpants/manpants3.webp') },
        { id: 6, name: 'Ladies Jean', price: 'R300', image: require('./assets/wp/womanpants3.webp') },
        { id: 7, name: 'blue Jean', price: 'R640', image: require('./assets/manpants/manpants4.webp') },
        { id: 8, name: 'Women Jean', price: 'R100', image: require('./assets/wp/womanpants3.webp') },
        { id: 9, name: 'Skinny Jean', price: 'R830', image: require('./assets/manpants/manpants5.webp') },
        { id: 10, name: 'Pink Jean', price: 'R150', image: require('./assets/wp/womanpants4.webp') },
        { id: 11, name: 'Multi-Pockets', price: 'R630', image: require('./assets/manpants/manpants6.webp') },
        { id: 12, name: 'Slim Fit', price: 'R300', image: require('./assets/wp/womanpants5.webp') },
        { id: 13, name: 'Blue Jean', price: 'R830', image: require('./assets/manpants/manpants7.jpeg') },
        { id: 14, name: 'Jean', price: 'R740', image: require('./assets/manpants/manpants8.jpg') },
        { id: 15, name: 'Ladies Jeans', price: 'R350', image: require('./assets/wp/womanpants7.webp') },
        { id: 16, name: 'Blue Jeans', price: 'R930', image: require('./assets/manpants/manpants9.png') },
        { id: 17, name: 'ladies jean', price: 'R150', image: require('./assets/wp/womanpants8.webp') },
        { id: 18, name: 'Indingo Ripped', price: 'R110', image: require('./assets/wp/womanpants9.webp') },
        { id: 19, name: 'Indingo wide Leg', price: 'R250', image: require('./assets/wp/womanpants10.webp') },
    ];

    const navigateToCart = (item) => {
        navigation.navigate('CartScreen', { item });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <TouchableOpacity style={{ position: 'absolute', left: 20 }}>
                    <Icon name="menu" type="material" size={24} color="#73533E" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>PANTS</Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
                    {items.map(item => (
                        <View key={item.id} style={{ width: '48%', marginBottom: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={item.image} style={{ width: '100%', height: 160, borderRadius: 10 }} />
                                <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>{item.price}</Text>
                            </View>
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
                            <TouchableOpacity onPress={() => navigateToCart(item)} style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 5 }}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PantsScreen;
