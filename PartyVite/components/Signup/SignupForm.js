import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

class SignupForm extends React.Component {
    render() {
        return (
        <View style={styles.containerSec}>
        <StatusBar barStyle="light-content"/>
            <TextInput 
                placeholder="email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => { this.secondTextInput.focus(); }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                ref={(input) => { this.secondTextInput = input; }}
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainerSignIn}>
                <Text style={styles.buttonTextSignIn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
        )}
}

const styles = StyleSheet.create({
    containerSec: {
        padding: 20,
        marginBottom: 100,
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        fontSize: 17,
    },
    buttonContainer: {
        backgroundColor: '#fff',
        height: 58,
        paddingVertical:15,
        borderRadius: 10,
        position: 'absolute',
        marginTop: 190,
        left: 195,
        width: 160,
    },
    buttonContainerSignIn: {
        backgroundColor: '#fd79a8',
        height: 58,
        paddingVertical:15,
        borderRadius: 10,
        marginTop: 10,
        width: 160,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 17
    },
    buttonTextSignIn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
    }
})

export default SignupForm;