

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
const TShirtScreen = ({ navigation }) => {
    const items = [
        { id: 1, name: 'Men in Black', price: 'R100', image: require('./assets/mantshirt/mentshirt1.webp') },
        { id: 2, name: 'White T-Shirt', price: 'R120', image: require('./assets/womantshirt/womantshirt1.jpg') },
        { id: 3, name: 'Whit T-Shirt', price: 'R130', image: require('./assets/mantshirt/mmantshirt2.jpeg') },
        { id: 4, name: 'White T-Shirt', price: 'R140', image: require('./assets/womantshirt/womantshirt1.webp') },
        { id: 5, name: 'White T-Shirt', price: 'R230', image: require('./assets/mantshirt/manshirt3.png') },
        { id: 6, name: 'Pink T-Shirt', price: 'R340', image: require('./assets/womantshirt/womantshirt3.webp') },
        { id: 7, name: 'Men T-Shirt', price: 'R130', image: require('./assets/mantshirt/mantshirt4.jpg') },
        { id: 8, name: 'Red T-Shirt', price: 'R440', image: require('./assets/womantshirt/womantshirt4.webp') },
        { id: 9, name: 'Black T-Shirt', price: 'R190', image: require('./assets/mantshirt/mantshirt5.jpg') },
        { id: 10, name: 'Pink Design', price: 'R180', image: require('./assets/womantshirt/womantshirt5.webp') },
        { id: 11, name: 'Men T-Shirt', price: 'R110', image: require('./assets/mantshirt/mantshirt6.png') },
        { id: 12, name: 'Black T-Shirt', price: 'R140', image: require('./assets/womantshirt/womantshirt6.webp') },
        { id: 13, name: 'Men T-shirt', price: 'R430', image: require('./assets/mantshirt/mantshirt7.png') },
        { id: 14, name: 'Woman T-Shirt', price: 'R140', image: require('./assets/womantshirt/womantshirt7.webp') },
        { id: 15, name: 'White T-Shirt', price: 'R330', image: require('./assets/mantshirt/mantshirt8.webp') },
        { id: 16, name: 'Black T-Shirt', price: 'R240', image: require('./assets/womantshirt/womantshirt8.jpg') },
        { id: 17, name: 'White T-Shirt', price: 'R130', image: require('./assets/womantshirt/womantshirt9.webp') },
        { id: 18, name: 'Black T-Shirt', price: 'R140', image: require('./assets/womantshirt/womantshirt10.jpg') },
    ];

    const navigateToCart = (item) => {
        navigation.navigate('CartScreen', { item });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <TouchableOpacity style={{ position: 'absolute', left: 20 }}>
                    <Icon name="menu" type="material" size={24} color="#73533E" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>T-SHIRT</Text>
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

export default TShirtScreen;
