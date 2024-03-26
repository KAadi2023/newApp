/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Welcome to React Native!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#fff',
    },
    blackText: {
        color: '#000',
    },
});

export default AppPro;
