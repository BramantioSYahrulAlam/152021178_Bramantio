import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTripScreen from '../screens/AddTripScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TripExspensesScreen from '../screens/TripExspensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutProfile from '../screens/AboutProfile';
import Kalkulator from '../screens/navigation/Kalkulator';
import KonversiUang from '../screens/navigation/KonversiUang';
import BMI from '../screens/navigation/BMI';
import Profile from '../screens/navigation/Profile';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddTrip"
          component={AddTripScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TripExpenses"
          component={TripExspensesScreen}
        />
        <Stack.Screen
          options={{headerShown: false, animation: 'slide_from_bottom'}}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            presentation: 'modal',
          }}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            presentation: 'modal',
          }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false, presentation: 'modal'}}
          name="AboutProfile"
          component={AboutProfile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            presentation: 'modal',
          }}
          name="Kalkulator"
          component={Kalkulator}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
            presentation: 'modal',
          }}
          name="KonversiUang"
          component={KonversiUang}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            presentation: 'modal',
          }}
          name="BMI"
          component={BMI}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_right',
            presentation: 'modal',
          }}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
