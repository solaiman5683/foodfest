import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Link } from 'react-router-native';
import FadeInView from '../../Shared/FadeInView';

const Login = () => {
	const [showPass, setShowPass] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [remember, setRemember] = React.useState(false);
	return (
		<FadeInView>
			<View style={styles.header}>
				<Link to='/'>
					<Image source={require('../../../Assets/images/skip.png')} />
				</Link>
				<Text style={styles.headerText}>Login</Text>
				<View />
			</View>
			<View style={styles.welcome}>
				<Image
					style={{ width: 246.32, height: 34.11 }}
					source={require('../../../Assets/images/welcome.png')}
				/>
				<Text style={styles.welcomeText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tincidunt
					egestas sociis iaculis in nullam id consectetur massa. Est cras dolor
					mi eleifend et nec. Tempor venenatis etiam elementum in nulla tortor,
					non. Aliquam habitant tellus consectetur rhoncus tincidunt id
					consectetur libero euismod. Diam tellus nec et faucibus tempor vel
					leo.
				</Text>
			</View>
			<View style={styles.loginForm}>
				<Text style={styles.loginFormText}>
					Log in to your Account. Let's start!
				</Text>
				<View style={styles.loginFormInput}>
					<AntDesign name='user' size={18} color='#8D8C8C' />
					<TextInput
						style={styles.input}
						onChangeText={e => console.log(e)}
						placeholder='User Name'
					/>
				</View>
				<View style={styles.loginFormInput}>
					<AntDesign name='mail' size={18} color='#8D8C8C' />
					<TextInput
						style={styles.input}
						onChangeText={e => console.log(e)}
						placeholder='Email Address'
					/>
				</View>
				<View style={styles.loginFormInput}>
					<Feather name='unlock' size={18} color='#8D8C8C' />
					<TextInput
						style={styles.input}
						onChangeText={e => console.log(e)}
						placeholder='Password'
						secureTextEntry={!showPass}
					/>
					<Feather
						name='eye'
						onPress={() => setShowPass(!showPass)}
						size={18}
						color={!showPass ? '#8D8C8C' : '#E53212'}
					/>
				</View>
				<View style={styles.checkBox}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Switch
							trackColor={{ false: '#EBE7F7', true: '#E53212' }}
							thumbColor={remember ? '#fff' : '#E53212'}
							ios_backgroundColor='red'
							onValueChange={() => setRemember(!remember)}
							value={remember}
						/>
						<Text style={{ color: '#A09E9E' }}>Remember me</Text>
					</View>
					<Text style={{ color: '#E53218' }}>Forget Password?</Text>
				</View>
				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row' }}>
					<Text>Don't have an account?</Text>
					<Link to='/signup'>
						<Text
							style={{ paddingLeft: 5, color: '#E53212', fontWeight: 'bold' }}>
							Signup
						</Text>
					</Link>
				</View>
			</View>
		</FadeInView>
	);
};

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		flexDirection: 'row',
	},
	headerText: {
		fontSize: 25,
		marginRight: 25,
	},
	welcome: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},
	welcomeText: {
		fontSize: 12,
		paddingVertical: 15,
		paddingHorizontal: 10,
		textAlign: 'center',
	},
	loginForm: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	loginFormText: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 20,
	},
	loginFormInput: {
		width: '80%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 5,
		marginBottom: 13,
		backgroundColor: 'rgba(235, 231, 231, 0.45)',
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		marginLeft: 10,
		flex: 1,
	},
	checkBox: {
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	loginButton: {
		width: '80%',
		backgroundColor: '#E53212',
		borderRadius: 5,
		marginTop: 20,
		marginBottom: 10,
		paddingHorizontal: 24,
		paddingVertical: 10,
	},
	loginButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
	},
});

export default Login;
