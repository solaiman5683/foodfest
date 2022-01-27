import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import FlatButton from '../../Shared/FlatButton';
import SafeView from '../../Shared/SafeView';

const FindFood = () => {
	let a = 1;
	return (
		<SafeView
			bgColor='#fff'
			statusBG='#fff'
			style={{ justifyContent: 'space-around' }}>
			<View style={styles.top}>
				<Link to='/'>
					<Image
						fadeDuration={500}
						source={require('../../../Assets/images/skip-btn.png')}
						style={styles.btn}
					/>
				</Link>
			</View>
			<View style={styles.center}>
				<Image
					fadeDuration={500}
					source={require('../../../Assets/images/freshfood.png')}
					style={styles.image}
				/>
				<Text style={styles.text}>Find Fresh Food</Text>
				<Text style={styles.des}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
					earum laboriosam. Beatae quae odit perferendis voluptatum omnis minus
					quasi soluta.
				</Text>
				<Image
					fadeDuration={1500}
					source={require('../../../Assets/images/step1.png')}
					style={styles.step}
				/>
			</View>
			<View style={styles.bottom}>
                <FlatButton text='Back' />
                <FlatButton text='Next' link='chief' />
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	top: {
		alignItems: 'flex-end',
		paddingRight: 20,
		justifyContent: 'flex-end',
	},
	center: {
		alignItems: 'center',
	},
	bottom: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: 20,
		paddingTop: 30,
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
	button: {
		fontSize: 20,
		textAlign: 'right',
		borderWidth: 1,
		borderColor: '#333',
		paddingLeft: 20,
		padding: 10,
		paddingRight: 20,
		margin: 10,
		borderRadius: 5,
		color: '#333',
	},
	image: {
		width: 400,
		height: 400,
		resizeMode: 'contain',
	},
});

export default FindFood;
