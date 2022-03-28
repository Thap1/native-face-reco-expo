import React from 'react';
import { ImageBackground, View, Text, Button } from 'react-native';

function LoginPage(props) {

    return (
        <View>
            <Button title='Click Home' onPress={() => { props.navigation.navigate('home') }} />
        </View>
    );
}

export default LoginPage;