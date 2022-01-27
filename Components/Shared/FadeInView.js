import React, { useRef } from 'react';
import { Animated } from 'react-native';

const FadeInView = ({ children }) => {
	// react native fade in animation
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
		}).start();

		return () => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 1000,
			}).start();
		};
	}, []);

	return <Animated.View>{children}</Animated.View>;
};

export default FadeInView;
