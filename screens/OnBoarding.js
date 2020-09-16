import React from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}) => {
    return(
        <Onboarding
            onSkip = {()=>navigation.replace("Login")}
            onDone = {()=>navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Onboarding-1.png.png')} style = {{
                        width: 190,
                        height: 190,
                        }} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Onboarding-2.png.png')} style = {{
                        width: 200,
                        height: 200,
                        }} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Onboarding-3.png.png')} style = {{
                        width: 200,
                        height: 200,
                        }} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },

            ]}
/>
    );

};

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});