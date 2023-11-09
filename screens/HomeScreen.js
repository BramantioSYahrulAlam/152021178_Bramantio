import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import {useNavigation} from '@react-navigation/native';
import AppNavigation from '../navigation/appNavigation';
import Kalkulator from './navigation/Kalkulator';
import BackButton from '../components/backButton';

const items = [
  {
    id: 1,
    place: 'Cibeunying',
    country: 'Bandung',
  },
  {
    id: 2,
    place: 'UjungBerung',
    country: 'BandungBarat',
  },
  {
    id: 3,
    place: 'Pasteur',
    country: 'BandungTimur',
  },
  {
    id: 4,
    place: 'BuahBatu',
    country: 'BandungUtara',
  },
  {
    id: 5,
    place: 'Pasteur',
    country: 'BandungTimur',
  },
  {
    id: 6,
    place: 'BuahBatu',
    country: 'BandungUtara',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <View>
          <TouchableOpacity className="p-2 px-3 bg-white border-grey-200 rounded-full ">
            <Text className={colors.heading}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Perjalanana
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Kalkulator'); // Navigasi ke layar "Dashboard"
          }}>
          <Image
            source={require('../assets/images/list.png')}
            className="w-7 h-7"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image
            source={require('../assets/images/list.png')}
            className="w-7 h-7"
          />
        </TouchableOpacity> */}
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className="{`${colors.heading} font-bold text-xl`}">
            Perjalanan Baru
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border-grey-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={items}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={'Belum ada perjalanan Tuan Tio Ganteng'} />
            }
            keyExtractor={item => item.id}
            showVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('TripExpenses', {...item})}
                  className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
