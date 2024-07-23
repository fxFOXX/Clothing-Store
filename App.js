import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, Modal, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import styles from './styles';
import LoadingPage from './screens/LoadingPage';
import { useNavigation } from '@react-navigation/native';
import filterIcon from './assets/icons/filterIcon.png'; // Adjust the path accordingly
import locationIcon from './assets/icons/locationIcon.png';

import bellIcon from './assets/icons/bellIcon.png';
import menuIcon from './assets/icons/menuIcon.png';
import dropIcon from './assets/icons/dropIcon.png';

import homeIcon from './assets/icons/homeIcon.png';
import favoriteIcon from './assets/icons/favoriteIcon.png';
import userIcon from './assets/icons/userIcon.png';
import cartIcon from './assets/icons/cartIcon.png';




const defaultScreenOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  ),
});

const { width } = Dimensions.get('window');





const carouselItems = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
];


const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState('King Williams Town');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [carouselItems, setCarouselItems] = useState([{}, {}, {}]);
  const [timeLeft, setTimeLeft] = useState(7616); // Initial countdown time in seconds (e.g., 02:12:56)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 7256)); // Reset to 20:12:56 (7256 seconds) when it reaches 0
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')} : ${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

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

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>New Collection</Text>
          <Text style={styles.cardSubtitle}>Discount 50% for the first time user</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Shop now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('./assets/42.png')} style={styles.cardImage} />
      </View>
    </View>
  );

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectLocation = (newLocation) => {
    setLocation(newLocation);
    setDropdownVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCategoryPress = (category) => {
    switch (category) {
      case 'T-Shirt':
        navigation.navigate('TShirts');
        break;
      case 'Pants':
        navigation.navigate('Pants');
        break;
      case 'Dress':
        navigation.navigate('Dress');
        break;
      case 'Jackets':
        navigation.navigate('Jackets');
        break;
      case 'Underwear':
        navigation.navigate('Underwear');
        break;
      case 'Brassieres':
        navigation.navigate('Brassieres');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={menuIcon} style={{ width: 40, height: 40, tintColor: '#333' }} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>My App</Text>
        </View>

        <View style={styles.topRow}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
           
           
            <TouchableOpacity style={styles.filterButton}>
              <Image source={locationIcon} style={{ width: 24, height: 24, tintColor: '#333' }} />
            </TouchableOpacity>
           
           
            <Text style={styles.locationName}>{location}</Text>
            <TouchableOpacity onPress={toggleDropdown}>
              <Image source={dropIcon} style={{ width: 40, height: 40, tintColor: '#333' }} />
            </TouchableOpacity>
            {dropdownVisible && (
              <Modal transparent={true} animationType="none">
                <TouchableWithoutFeedback onPress={toggleDropdown}>
                  <View style={styles.modalOverlay}>
                    <View style={styles.dropdown}>
                      {['King Williams Town', 'Johannesburg', 'Cape Town', 'Durban'].map((city) => (
                        <TouchableOpacity key={city} onPress={() => selectLocation(city)}>
                          <Text style={styles.dropdownItem}>{city}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            )}
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={bellIcon} style={{ width: 24, height: 24, tintColor: '#333' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />

        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Icon name="search" type="material" size={24} />
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
          
        
        
          <TouchableOpacity style={styles.filterButton}>
            <Image source={filterIcon} style={{ width: 30, height: 30, tintColor: '#333' }} />
          </TouchableOpacity>
        
        
        </View>

        <View style={styles.spacer} />

        <Carousel
          loop
          width={width}
          height={200}
          autoPlay
          data={carouselItems}
          scrollAnimationDuration={1000}
          renderItem={renderItem}
          autoPlayInterval={3000} // Set the interval to 3000 milliseconds (3 seconds)
          pagingEnabled={false}
          scrollEnabled
          snapEnabled={false}
        />

        <View style={styles.dotsContainer}>
          {carouselItems.map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>

        <View style={styles.spacer} />

        <Text style={styles.categoryTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          {['T-Shirt', 'Pants', 'Dress', 'Jackets', 'Underwear', 'Brassieres'].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => handleCategoryPress(category)}>
              <Image source={categoryImages[index]} style={styles.categoryImage} />
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.flashSaleRow}>
          <Text style={styles.flashSaleTitle}>Flash Sale</Text>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>Closing in</Text>
            <Text style={styles.countdownTimer}>{formatTime(timeLeft)}</Text>
          </View>
        </View>

        <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingRight: 20 }}
          
          >
            <TouchableOpacity
              onPress={() => handlePress('All')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress('Newest')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Newest</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress('Popular')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Popular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress('Man')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Man</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress('Woman')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#ccc',
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Woman</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.spacer} />

        <View style={styles.imageRow}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/stock/top.jpg')} style={styles.image} />
            <Text style={styles.priceTag}>R350</Text>
            <Text style={styles.imageText}>Ladies Top</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/stock/suit.webp')} style={styles.image} />
            <Text style={styles.priceTag}>R1800</Text>
            <Text style={styles.imageText}>Men's Suit</Text>
          </View>
        </View>

        <View style={styles.imageRow}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/stock/chino.jpg')} style={styles.image} />
            <Text style={styles.priceTag}>R550</Text>
            <Text style={styles.imageText}>Chino</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/2.jpg')} style={styles.image} />
            <Text style={styles.priceTag}>R420</Text>
            <Text style={styles.imageText}>Ladies Shirt</Text>
          </View>
        </View>

        <View style={styles.imageRow}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/stock/w.jpg')} style={styles.image} />
            <Text style={styles.priceTag}>R350</Text>
            <Text style={styles.imageText}>fashionable coat </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/stock/cotton.jpg')} style={styles.image} />
            <Text style={styles.priceTag}>R420</Text>
            <Text style={styles.imageText}>Short Tights</Text>
          </View>
        </View>

        <View style={styles.spacer} />
      </ScrollView>

      {menuVisible && (
        <Modal transparent={true} animationType="none">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <View style={styles.modalOverlay}>
              <View style={styles.menu}>
                {['Profile', 'Orders', 'Wallet', 'Help Center', 'About'].map((menuItem) => (
                  <TouchableOpacity key={menuItem}>
                    <Text style={styles.menuItem}>{menuItem}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </SafeAreaView>
  );
};














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
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <TouchableOpacity style={{ position: 'absolute', left: 20 }}>
        
        
          <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" type="material" size={24} color="#73533E" />
          </TouchableOpacity>

        </TouchableOpacity>
        <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>T-Shirts</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
        <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R100 OFF</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>Download 15% off</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>|</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
          </View>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
          {items.map(item => (
            <View key={item.id} style={{ width: '48%', marginBottom: 10 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.image} style={{ width: '100%', height: 250, borderRadius: 10 }} />
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

const CartScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>CART</Text>
      </View>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image source={item.image} style={{ width: '80%', height: 300, borderRadius: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>{item.price}</Text>
        <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 15, borderRadius: 5, marginTop: 20 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};




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
        <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="material" size={24} color="#73533E" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>Pants</Text>
        
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
        <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R100 OFF</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>Download 15% off</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>|</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
          </View>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
          {items.map(item => (
            <View key={item.id} style={{ width: '48%', marginBottom: 10 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.image} style={{ width: '100%', height: 250, borderRadius: 10 }} />
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



const DressScreen = ({ navigation }) => {
  const items = [
    { id: 1, name: 'Floral Smocked', price: 'R700', image: require('./assets/dress/dress1.webp') },
    { id: 2, name: 'Pink dress', price: 'R400', image: require('./assets/dress/dress3.webp') },
    { id: 3, name: 'Orange Dress', price: 'R420', image: require('./assets/dress/dress4.webp') },
    { id: 4, name: 'Black dress', price: 'R550', image: require('./assets/dress/dress5.jpeg') },
    { id: 5, name: 'Red Dress', price: 'R430', image: require('./assets/dress/dress6.jpg') },
    { id: 6, name: 'Blue dress', price: 'R300', image: require('./assets/dress/dress7.webp') },
    { id: 7, name: 'Red Dress', price: 'R640', image: require('./assets/dress/dress8.jpg') },
    { id: 8, name: 'Yellow Dress', price: 'R100', image: require('./assets/dress/dress9.webp') },
    { id: 9, name: 'White Dress', price: 'R830', image: require('./assets/dress/dress10.webp') },
  ];

  const navigateToCart = (item) => {
    navigation.navigate('CartScreen', { item });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
         
         
         <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="material" size={24} color="#73533E" />
        </TouchableOpacity>


        <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>Dress</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
        <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R100 OFF</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>Download 15% off</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>|</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
          </View>
        </View>
        <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
          {items.map(item => (
            <View key={item.id} style={{ width: '48%', marginBottom: 10 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item.image} style={{ width: '100%', height: 250, borderRadius: 10 }} />
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



const JacketsScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <TouchableOpacity style={{ position: 'absolute', left: 20 }}>


        <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="material" size={24} color="#73533E" />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>JACKET</Text>
  
 
 
    </View>
    <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
      <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R440 OFF</Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>Download 15% off</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>|</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
        </View>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj1.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1000</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men's Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj1.webp')} style={{ width: '100%', height: 350, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1200</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Ladies Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj2.webp')} style={{ width: '100%', height: 330, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1300</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Yellow Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj2.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1400</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Ladies Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj3.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R2300</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men's Long Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj3.webp')} style={{ width: '100%', height: 280, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R940</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Ladies Black Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj4.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1300</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj4.webp')} style={{ width: '100%', height: 330, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R940</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Ladies's Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj5.webp')} style={{ width: '100%', height: 280, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1900</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj5.webp')} style={{ width: '100%', height: 280, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1800</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Brown Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj6.webp')} style={{ width: '100%', height: 280, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1100</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men's Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj6.webp')} style={{ width: '100%', height: 330, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: '#73533E', color: '#fff', padding: 5, borderRadius: 5 }}>R1400</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Denim Short Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#73533E', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj7.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R930</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Blue Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj8.webp')} style={{ width: '100%', height: 330, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R1400</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Denim Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manjacket/mj8.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R930</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Brown Leather</Text>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanjacket/wj9.webp')} style={{ width: '100%', height: 330, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R1540</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Denim Jacket</Text>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);



const UnderwearScreen = () => (

  <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      
      
      <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" type="material" size={24} color="#73533E" />
      </TouchableOpacity>

      <Text style={{ fontSize: 20, top: 20, fontWeight: 'bold' }}>Underwear</Text>
    </View>
    <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
      <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R44 OFF</Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>Download 15% off</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>|</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
        </View>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
      </View>
      
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder1.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R100</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Lace</Text>
        
        
        
        
        
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder1.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R120</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>SU 2 pack</Text>
        </View>
        
        
        
        
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder2.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R130</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Red Lace</Text>
        </View>
        
        
        
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder2.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R140</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>SU Boxers</Text>
        </View>
       
       
       
       
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder3.jpg')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R230</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>G String lace </Text>
        </View>
       
       
       
       
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder3.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R340</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>5 Pack boxer</Text>
        </View>
       
       
       
       
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder4.webp')} style={{ width: '100%', height: 160, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R130</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>maison close</Text>
        </View>
       
       
       
       
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder4.webp')} style={{ width: '100%', height: 210, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R440</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Jockey Boxer</Text>
        </View>
        
        
        
        
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder5.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R190</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Sexy Cotton</Text>
        </View>
      
      
      
      
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder5.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R180</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Performance Boxer</Text>
        </View>



        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder6.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R110</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Single Lace</Text>
        </View>


        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder6.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R140</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men 3 pack</Text>
        </View>

        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder7.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R430</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Nucleus Clothing</Text>
       
       
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder7.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R140</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Nucleus Clothing</Text>
        </View>


        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder8.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R330</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men's underwear</Text>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder8.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R240</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>grey lace</Text>
        </View>



        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/manunder/munder9.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 6, borderRadius: 5 }}>R130</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Men's Boxers</Text>
        </View>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/womanunder/wunder10.jpg')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R140</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>black Lace</Text>
        </View>



      </View>
    </ScrollView>
  </SafeAreaView>
);

const BrassieresScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>

        <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="material" size={24} color="#73533E" />
        </TouchableOpacity>

   
      <Text style={{ fontSize: 20, top: 15, fontWeight: 'bold' }}>Dress</Text>
    </View>
    <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 10 }}>
      <View style={{ width: '100%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 50, textAlign: 'center' }}>GET R100 OFF</Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON YOUR FIRST ORDER</Text>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>Download 15% off</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>|</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>FREE SHIPPING</Text>
        </View>
      </View>
      <View style={{ width: '95%', backgroundColor: '#fff', marginBottom: 10, alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>ON FIRST ORDER OF R580+</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%' }}>
        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra1.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R700</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Pink Bra </Text>
        </View>


        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra2.webp')} style={{ width: '100%', height: 260, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R400</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Lace</Text>
        </View>



        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra3.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R420</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Bra</Text>
        </View>




        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra4.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R550</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}> Blue Bra</Text>
        </View>


        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra5.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R430</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Pink Bra</Text>
        </View>



        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra6.webp')} style={{ width: '100%', height: 250, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R300</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Pink Bra</Text>
        </View>






        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra7.webp')} style={{ width: '100%', height: 150, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R640</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Bra</Text>
        </View>


        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra8.webp')} style={{ width: '100%', height: 150, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R100</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>brown Bra</Text>
        </View>



        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra9.webp')} style={{ width: '100%', height: 150, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R830</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Black Bra</Text>
        </View>

        <View style={{ width: '48%', marginBottom: 10 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./assets/bras/bra10.webp')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
            <Text style={{ position: 'absolute', top: '100%', left: 1, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 5, borderRadius: 5 }}>R830</Text>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Lace bra</Text>
        </View>




      </View>
    </ScrollView>
  </SafeAreaView>
);
;
const Stack = createStackNavigator();

const LoadingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoadingPage" component={LoadingPage} />
  </Stack.Navigator>
);


const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
  
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TShirts" component={TShirtScreen} />
    <Stack.Screen name="Pants" component={PantsScreen} />
    <Stack.Screen name="Dress" component={DressScreen} />
    <Stack.Screen name="Jackets" component={JacketsScreen} />
    <Stack.Screen name="Underwear" component={UnderwearScreen} />
    <Stack.Screen name="Brassieres" component={BrassieresScreen} />
    <Stack.Screen name="TShirtScreen" component={TShirtScreen} options={{ title: 'T-Shirts' }} />
    <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
  </Stack.Navigator>
);










const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={homeIcon} style={{ width: 30, height: 30, tintColor: '#333' }} />
          ),
        }} />
        <Tab.Screen name="Cart" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={cartIcon} style={{ width: 30, height: 30, tintColor: '#333' }} />
          ),
        }} />
        <Tab.Screen name="Favorites" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={favoriteIcon} style={{ width: 30, height: 30, tintColor: '#333' }} />
          ),
        }} />
        <Tab.Screen name="Profile" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={userIcon} style={{ width: 30, height: 30, tintColor: '#333' }} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
