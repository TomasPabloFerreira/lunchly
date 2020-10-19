import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		height: 60,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	text: {
		fontSize: 18
	}
})

type ListItemProps = { onPress : () => void , name: string }

export default ({ onPress, name } : ListItemProps) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	)
}
