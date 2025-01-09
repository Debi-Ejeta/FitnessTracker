import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

// Mock data for exercises
const exercises = [
  {
    id: '1',
    name: 'Chest Press',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Chest+Press',
    screen: 'ChestPress',
  },
  {
    id: '2',
    name: 'Shoulder Press',
    image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Shoulder+Press',
    screen: 'ShoulderPress',
  },
  {
    id: '3',
    name: 'Arm Curl',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Arm+Curl',
    screen: 'ArmCurl',
  },
];

const HomeScreen = ({ navigation }) => {
  // Get today's date
  const today = new Date().toLocaleDateString();

  const renderExerciseCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>FitnessTracker</Text>
        <Text style={styles.date}>{today}</Text>
      </View>

      {/* Exercise Cards */}
      <FlatList
        data={exercises}
        renderItem={renderExerciseCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HomeScreen;