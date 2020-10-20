import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
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
	
	return (
		<View style={styles.container}>
			{ loading
				? <Text>loading...</Text>
				:
				<>
					<Text>{meal.name}</Text>
					<Text>{meal.description}</Text>
				</>
			}
		</View>
	)
}

export default Modal
