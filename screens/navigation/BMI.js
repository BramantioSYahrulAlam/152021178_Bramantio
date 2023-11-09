import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import BottomBar from '../BottomBar';
import BackButton from '../../components/backButton';

export default function BMI() {
  const [beratBadan, setBeratBadan] = useState('');
  const [tinggiBadan, setTinggiBadan] = useState('');
  const [gender, setGender] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');

  const clearInputs = () => {
    setBeratBadan('');
    setTinggiBadan('');
    setGender('');
    setBmiResult('');
    setBmiStatus('');
  };

  const calculateBMI = () => {
    const berat = parseFloat(beratBadan);
    const tinggi = parseFloat(tinggiBadan);

    if (
      isNaN(berat) ||
      isNaN(tinggi) ||
      berat <= 0 ||
      tinggi <= 0 ||
      (gender !== 'L' && gender !== 'P')
    ) {
      // Validasi input
      setBmiResult('Input tidak valid');
      setBmiStatus('');
      return;
    }

    const tinggiM = tinggi / 100; // Konversi tinggi dari cm ke m
    const bmi = berat / (tinggiM * tinggiM);

    // Tentukan status BMI
    let status = '';
    if (gender === 'L') {
      if (bmi < 20.7) {
        status = 'Kurus ANDA TIDAK SEHAT';
      } else if (bmi < 26.4) {
        status = 'Normal';
      } else {
        status = 'Gemuk Olahraga Cuy';
      }
    } else if (gender === 'P') {
      if (bmi < 19.1) {
        status = 'Kurus, Kamu TIDAK SEHAT';
      } else if (bmi < 25.8) {
        status = 'Normal';
      } else {
        status = 'Gemuk, Olahraga cuy';
      }
    }

    setBmiResult(bmi.toFixed(2));
    setBmiStatus(status);
  };

  return (
    <View style={styles.bg}>
      <BackButton />
      <Text style={styles.font}>BMI Kalkulator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Berat Badan (kg)"
          value={beratBadan}
          onChangeText={text => setBeratBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tinggi Badan (cm)"
          value={tinggiBadan}
          onChangeText={text => setTinggiBadan(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Jenis Kelamin (L/P)"
          value={gender}
          onChangeText={text => setGender(text)}
        />
        <Text style={styles.resultText}>BMI:</Text>
        <TextInput
          style={styles.input}
          value={bmiResult}
          onChangeText={text => setBmiResult(text)}
        />
        <Text style={styles.resultText}>Status BMI:</Text>
        <TextInput
          style={styles.input}
          value={bmiStatus}
          onChangeText={text => setBmiStatus(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Hitung BMI" onPress={calculateBMI} color="#7ca387" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Clear" onPress={clearInputs} color="#7ca387" />
      </View>

      <View style={styles.space}></View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  buttonContainer: {
    backgroundColor: 'green',
    margin: 20,
    marginVertical: 11,
    borderRadius: 50,
    width: 150,
    alignSelf: 'center', // Menyusun tombol di tengah horizontal
  },

  bg: {
    backgroundColor: '#d5ded7',
  },
  font: {
    fontSize: 25,
    fontStyle: 'Bold',
    textAlign: 'center',
  },
  space: {
    marginVertical: 10,
  },
});
