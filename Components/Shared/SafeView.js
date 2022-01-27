import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const SafeView = ({
	bgColor,
    style,
	statusBG='#fff',
    children,
    barStyle='dark',
    hidden=false
}) => {
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
			{children}
		</SafeAreaView>
	);
};

export default SafeView;
