import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MealsScreen from './screens/Meals'
import Modal from './screens/Modal'
import React from 'react'

const Stack = createStackNavigator()

const AppNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Meals">
			<Stack.Screen name="Meals" component={MealsScreen} />
		</Stack.Navigator>
	)
}

const RootStack = () => {
	return (
		<Stack.Navigator mode="modal" headerMode="none">
			<Stack.Screen name="Main" component={AppNavigator} />
			<Stack.Screen name="Modal" component={Modal} />
		</Stack.Navigator>
	)
}

export default function App() {
	return (
	  <NavigationContainer>
		  <RootStack />
	  </NavigationContainer>
	)
}
