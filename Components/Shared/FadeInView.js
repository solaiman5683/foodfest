import React, { useRef } from 'react';
import { Animated, SafeAreaView, StatusBar } from 'react-native';

const FadeInView = ({
	bgColor,
	style,
	statusBG = '#fff',
	children,
	barStyle = 'dark',
	hidden = false,
}) => {
	// react native fade in animation
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();

		return () => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}).start();
		};
	}, []);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: bgColor,
				...style,
			}}>
			<StatusBar
				animated={true}
				backgroundColor={statusBG}
				barStyle={`${barStyle}-content`}
				showHideTransition='slide'
				hidden={hidden}
			/>
			<Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
		</SafeAreaView>
	);
};

export default FadeInView;
