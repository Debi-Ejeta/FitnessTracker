import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ExerciseTracker = () => {
  const [exerciseData, setExerciseData] = useState([
    { exercise: 'Chest Press', sets: '', reps: '', weight: '' },
    { exercise: 'Shoulder Press', sets: '', reps: '', weight: '' },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedData = [...exerciseData];
    updatedData[index][field] = value;
    setExerciseData(updatedData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {exerciseData.map((item, index) => (
        <View key={index} style={styles.exerciseCard}>
          <Text style={styles.exerciseTitle}>{item.exercise}</Text>

          {/* Weight Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Weight (kg):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="e.g., 20"
              value={item.weight}
              onChangeText={(value) => handleInputChange(index, 'weight', value)}
            />
          </View>

          {/* Sets Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sets:</Text>
            <Picker
              selectedValue={item.sets}
              onValueChange={(value) =>
                handleInputChange(index, 'sets', value)
              }
              style={styles.picker}
            >
              <Picker.Item label="Select sets" value="" />
              {[...Array(10)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>

          {/* Reps Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reps:</Text>
            <Picker
              selectedValue={item.reps}
              onValueChange={(value) =>
                handleInputChange(index, 'reps', value)
              }
              style={styles.picker}
            >
              <Picker.Item label="Select reps" value="" />
              {[...Array(20)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
              ))}
            </Picker>
          </View>
        </View>
      ))}

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => console.log('Tracked Data:', exerciseData)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  exerciseCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
  },
  picker: {
    height: 40,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExerciseTracker;