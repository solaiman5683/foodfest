import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
		<>
			<SafeAreaView style={styles.container}>
				<StatusBar
					animated={true}
					backgroundColor='#E53212'
					barStyle='default'
					showHideTransition='slide'
					hidden={false}
				/>
				<Image
					fadeDuration={1000}
					source={require('./logo.png')}
					style={styles.image}
				/>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E53212',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fff',
	},
});
