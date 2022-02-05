import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FadeInView from '../../Shared/FadeInView';
import FlatButton from '../../Shared/FlatButton';
import OutlineButton from '../../Shared/OutlineButton';

const Chief = () => {
	let a = 1;
	return (
		<FadeInView
			bgColor='#fff'
			statusBG='#fff'
			style={{ justifyContent: 'space-between' }}>
			<View style={styles.top}>
				<OutlineButton text='Skip' link='login' />
			</View>
			<View style={styles.center}>
				<Image
					fadeDuration={500}
					source={require('../../../Assets/images/chef.png')}
					style={styles.image}
				/>
				<Text style={styles.text}>Professional Chief</Text>
				<Text style={styles.des}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
					earum laboriosam. Beatae quae odit perferendis voluptatum omnis minus
					quasi soluta.
				</Text>
				<Image
					fadeDuration={1500}
					source={require('../../../Assets/images/step2.png')}
					style={styles.step}
				/>
			</View>
			<View style={styles.bottom}>
				<FlatButton text='Back' link='find' />
				<FlatButton text='Next' link='variety' />
			</View>
		</FadeInView>
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
		paddingBottom: 30,
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

export default Chief;
