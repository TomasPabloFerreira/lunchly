import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ListItem from '../components/ListItem'
import useFetch from '../hooks/useFetch'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	list: {
		alignSelf: 'stretch'
	}
})

type MealsProps = { navigation: any }
 
const Meals = ({ navigation } : MealsProps) => {
	const { loading, data: meals } : { loading: boolean, data: Meal[] } =
		useFetch('https://lunchly-api.tomasferreira.vercel.app/api/meals')

	return (
		<View style={styles.container}>
			{ loading 
				? <Text>Loading...</Text>
				:
				<FlatList
					style={styles.list}
					data={meals}
					keyExtractor={x => x._id}
					renderItem={({ item }) =>
						<ListItem
							onPress={() => {
								navigation.navigate('Modal', { _id: item._id })
							}}
							name={item.name}
						/>
					}
				/>
			}
		</View>
	)
}

export default Meals 
