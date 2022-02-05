import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FlatButton from '../../Shared/FlatButton';
import OutlineButton from '../../Shared/OutlineButton';
import SafeView from '../../Shared/SafeView';

const Variety = () => {
	return (
		<SafeView
			bgColor='#fff'
			statusBG='#fff'
			style={{ justifyContent: 'space-between' }}>
			<View style={styles.top}>
				<OutlineButton text='Back' link='chief' />
			</View>
			<View style={styles.center}>
				<Image
					fadeDuration={500}
					source={require('../../../Assets/images/searchvariety.png')}
					style={styles.image}
				/>
				<Text style={styles.text}>Search Variety</Text>
				<Text style={styles.des}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
					earum laboriosam. Beatae quae odit perferendis voluptatum omnis minus
					quasi soluta.
				</Text>
				<Image
					fadeDuration={1500}
					source={require('../../../Assets/images/step3.png')}
					style={styles.step}
				/>
			</View>
			<View style={styles.bottom}>
				<FlatButton
					text='Get Started'
					link='login'
					onPress={() => console.log('Hello')}
					style={{ alignItems: 'center' }}
				/>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	top: {
		alignItems: 'flex-start',
		paddingLeft: 20,
		paddingTop: 30,
		justifyContent: 'flex-end',
	},
	center: {
		alignItems: 'center',
	},
	bottom: {
		width: '100%',
		padding: 20,
		textAlign: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#333',
	},
	des: {
		fontSize: 15,
		fontWeight: 'normal',
		padding: 10,
		marginBottom: 30,
		color: '#333',
	},
	image: {
		width: 400,
		height: 400,
		resizeMode: 'contain',
	},
});

export default Variety;
