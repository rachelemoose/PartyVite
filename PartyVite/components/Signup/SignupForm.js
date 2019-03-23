import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

class SignupForm extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
            <TextInput 
                placeholder="email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
        )}
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 140,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#fff',
        paddingVertical:15,
        borderRadius: 10,
        marginTop: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000'
    }
})

export default SignupForm;