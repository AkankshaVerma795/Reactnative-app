import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux/dist/react-redux';
import  store  from './src/store'; 
import BudgetEntryScreen from './src/components/BudgetEntryScreen';
import BudgetEntryListingScreen from './src/components/BudgetEntryListingScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BudgetEntry">
          <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
          <Stack.Screen
            name="BudgetEntryListing"
            component={BudgetEntryListingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   let data=100;
//   const fruit=(val)=>{
//     data=20;
//     console.warn(data)
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Hello I am akanksha herw. I woould like to create new App.!</Text>
//       <Text style={{fontSize:30 }}>{data} </Text>
//       <Button
//       title="on Press"
//       onPress={()=>fruit("hello World")}
//       color={'green'}
//       />
//       <Button
//       title='On Press 2'
//       onPress={fruit}
//       color={'red'}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
