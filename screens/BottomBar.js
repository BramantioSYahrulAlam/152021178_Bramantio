import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Kalkulator from './navigation/Kalkulator';
import {useNavigation} from '@react-navigation/native';

export default function BottomBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Kalkulator')}>
        <Image
          source={require('../assets/images/calculator.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('KonversiUang')}>
        <Image
          source={require('../assets/images/rupiah.png')}
          style={{width: 45, height: 45}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('BMI')}>
        <Image
          source={require('../assets/images/healthy.png')}
          style={{width: 42, height: 42}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('../assets/images/profile.png')}
          style={{width: 42, height: 42}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60, // Sesuaikan tinggi menu bottom bar
    backgroundColor: 'white', // Warna latar belakang menu bottom bar
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
