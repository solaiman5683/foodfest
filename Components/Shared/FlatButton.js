import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigate } from 'react-router-native';

const FlatButton = ({ text, style,link='' }) => {
    const navigate = useNavigate();
	return (
		<TouchableOpacity onPress={() => navigate(`/${link}`)}>
            <View style={{
                ...styles.button,
                ...style,
            }}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E53212',
        borderRadius: 5,
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default FlatButton;
