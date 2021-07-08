import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Button,Image,Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home/index'
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#b7b7a4'}}>
      <Image source={require('./assets/Game.png')} style={{
        alignItems:'center',
        justifyContent:'center',
        width:'400px',
        height:'400px',
        position:'absolute',
        top:'0px',
        marginBottom:'20px'
      }}/>
     <Text
     onPress={() => navigation.navigate('Game')}
     style={{ flex: 1, alignItems: 'center', justifyContent: 'center',position:'absolute',top:'400px',backgroundColor:'#0ad',borderRadius:4,padding:'10px',width:'200px',textAlign:'center',fontWeight:'700'}}
     >Go to game</Text>
      
    </View>
    
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
    <Text>Dhansekar</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={Home}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
