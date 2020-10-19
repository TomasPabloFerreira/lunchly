import { NavigationAction } from '@react-navigation/native'
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack'
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

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

const testdata = [
	{ _id: 'lala', name: 'Steak', description: 'Tipical food!!' }
]

type MealsProps = { navigation: any }

export default ({ navigation } : MealsProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={testdata}
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
		</View>
	)
}
