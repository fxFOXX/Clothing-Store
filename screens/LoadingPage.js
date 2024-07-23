import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const NeumorphismCard = ({ style }) => {
  return <View style={[styles.neumorphismCard, style]} />;
};

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <NeumorphismCard style={styles.topRightCard} />
      <View style={styles.middleContainer}>
        <View style={styles.fashionContainer}>
          <View style={styles.fContainer}>
            <Text style={styles.fText}>f</Text>
          </View>
          <Text style={styles.fashionText}>
            fashion <Text style={styles.loadingDots}>.</Text>
          </Text>
        </View>
      </View>
      <NeumorphismCard style={styles.bottomLeftCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  neumorphismCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 100, // Half of width/height for a perfect circle
    width: 200,
    height: 200,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: '#000',
    elevation: 50,
  },
  topRightCard: {
    position: 'absolute',
    top: -100, // Move half the height up
    right: -100, // Move half the width to the right
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fashionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fContainer: {
    backgroundColor: '#78543C',
    width: 60,
    height: 60,
    borderRadius: 30, // Half of width/height for a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: '#d1cdc7',
    elevation: 10,
  },
  fText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  fashionText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  loadingDots: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78543C',
  },
  bottomLeftCard: {
    position: 'absolute',
    bottom: -100, // Move half the height down
    left: -100, // Move half the width to the left
  },
});

export default LoadingPage;
