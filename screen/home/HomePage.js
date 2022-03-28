import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'

function HomePage(props) {
    return (
        <SafeAreaView>
            <TextInput placeholder='Emai' />
            <TextInput placeholder='Password' />
            <TouchableOpacity>
                <Text>Entrar</Text>
            </TouchableOpacity>
            <Button title='Click Login' onPress={() => { props.navigation.navigate('login') }} />
        </SafeAreaView>
    )
}

HomePage.propTypes = {}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#19181f',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 45,
        borderWidth: 2,
        borderColor: '#7159c1',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10
    }
})

export default HomePage
