import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const Spacer = ({ height }) => <View style={{ height }} />;

const App = () => {
    const [firstImage, setFirstImage] = useState(require('./assets/1.jpeg'));

    const handleImageChange = () => {
        setFirstImage(firstImage === require('./assets/1.jpeg') ? require('./assets/4.jpeg') : require('./assets/1.jpeg'));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circleCard} />
            <TouchableOpacity style={styles.firstImageContainer} onPress={handleImageChange}>
                <Image
                    source={firstImage}
                    style={styles.firstImage}
                />
                <Text style={styles.starText}>*</Text>
            </TouchableOpacity>

            <Image
                source={require('./assets/2.jpg')}
                style={styles.secondImage}
            />
            <Image
                source={require('./assets/3.webp')}
                style={styles.circleImage}
            />

            <Spacer height={20} />
            <Spacer height={20} />
            <Spacer height={20} />

            <Text style={styles.mainText}>
                The <Text style={styles.fashionText}>Fashion App</Text> That Makes You Look Your Best
            </Text>

            <Text style={styles.loremText}>
                Discover the app that helps you elevate your style and look your best every day.
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Let's Get Started</Text>
            </TouchableOpacity>

            <Text style={styles.signInText}>
                Already have an account? <Text style={styles.signInLink}>Sign in</Text>
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        padding: 20,
    },
    circleCard: {
        backgroundColor: '#e0e0e0',
        borderRadius: 175, // half of width or height
        width: 350,
        height: 350,
        position: 'absolute',
        top: '-10%',
        left: '-45%',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowColor: '#78543C',
        elevation: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
    },

    firstImageContainer: {
        position: 'absolute',
        top: '10%',
        left: '6%',
        width: width * 0.50,
        height: height * 0.5,
        borderRadius: 200,
        overflow: 'visible',
        marginBottom: 20,
    },
    firstImage: {
        width: '100%',
        height: '100%',
        borderRadius: 200,
    },
    starText: {
        position: 'absolute',
        bottom: -2,
        left: -8,
        fontSize: 90,
        color: '#000',
        fontWeight: 'bold',
        zIndex: 1,
    },
    secondImage: {
        position: 'absolute',
        top: '10%',
        left: width * 0.22 + 150,
        width: 160,
        height: height * 0.25,
        borderRadius: 200,
        overflow: 'hidden',
        marginBottom: 20,
    },
    circleImage: {
        flex: 1,
        position: 'absolute',
        top: height * 0.29 + 80,
        left: width * 0.22 + 150,
        width: width * 0.40,
        height: height * 0.20,
        borderRadius: 200,
        overflow: 'hidden',
        marginBottom: 20, // Added marginBottom
    },
    mainText: {
        marginTop: height * 0.55,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        marginBottom: 20, // Added marginBottom
    },
    fashionText: {
        color: '#78543C',
    },
    loremText: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        marginBottom: 20, // Added marginBottom
    },
    button: {
        marginTop: 20,
        backgroundColor: '#78543C',
        borderRadius: 20,
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowColor: '#000',
        marginBottom: 20, // Added marginBottom
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    signInLink: {
        color: '#78543C',
        fontWeight: 'bold',
    },
});

export default App;
