import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import useFetch from '../hooks/useFetch'
import Meal from '../types/Meal'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

type ModalProps = { route: any, navigation: any }

const Modal = ({ route, navigation } : ModalProps) => {

	const id = route.params._id
	
	const { loading, data: meal }: { loading: boolean, data: Meal } =
		useFetch(`https://lunchly-api.tomasferreira.vercel.app/api/meals/${id}`)

	const placeOrder = () => {
		fetch('https://lunchly-api.tomasferreira.vercel.app/api/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				meal_id: meal._id,
				user_id: 'temporal 2'
			})
		}).then(() => {
			alert('Order placed successfully')
			navigation.goBack()
		})
	}
	
	return (
		<View style={styles.container}>
			{ loading
				? <Text>loading...</Text>
				:
				<>
					<Text>{meal.name}</Text>
					<Text>{meal.description}</Text>
					<Button title="Order Now" onPress={placeOrder} />
					<Button title="Cancel" onPress={() => {navigation.goBack()}} />
				</>
			}
		</View>
	)
}

export default Modal
