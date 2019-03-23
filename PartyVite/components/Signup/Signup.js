import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import SignupForm from './SignupForm';

class Signup extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/PVLogo.png')}/>
                        <Text style={styles.title}>Inviting People has never been this easy</Text>
                </View>
                <View style={styles.formContainer}>
                    <SignupForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#A33856'
    },
    logoContainer: {
        marginTop: 80,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 150,
        width: 250,
    },
    title: {
        color: '#ffffff',
        marginTop: 30,
        fontSize: 17,
    }
});

export default Signup;