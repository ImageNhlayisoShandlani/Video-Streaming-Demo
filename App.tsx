import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './screens/Landing';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();


function RootStack() {
  return (


      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222'
          },
          headerTintColor: '#eee',
          headerTitle: ({ children }) => <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', }}>
            <Text style={{ color: '#eee', fontSize: 20, fontStyle: 'italic', fontWeight: '900', textAlign: 'center', marginTop: 13 }}>{children}</Text>
            <Image source={require('./assets/images/splash-icon.png')} style={{ width: 50, height: 50, borderRadius: 100 }} />
          </View>
        }}>
        <Stack.Screen name='Landing Screen' component={Landing} options={{ title: 'Welcome' }} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
