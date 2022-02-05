import React, { useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/find');
        }, 4000);
    }, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated={true}
				backgroundColor='#E53212'
				barStyle='default'
				showHideTransition='slide'
				hidden={false}
			/>
			<Image
				fadeDuration={1500}
				source={require('../../../Assets/logo.png')}
				style={styles.image}
			/>
		</SafeAreaView>
	);
};

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
	image:{
		width: 240,
		height: 66,
	}
});

export default Welcome;
