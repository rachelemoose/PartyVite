import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';
import SignupForm from '../Signup/SignupForm';
import {GOOGLE_CLIENT_ID, iOS_CLIENT_ID} from 'react-native-dotenv';
import * as Expo from 'expo'


class LoginButton extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        signedIn: false,
        name: "",
        photoUrl: ""
    }
    }
    signIn = async () => {
    try {
        const result = await Expo.Google.logInAsync({
        androidClientId:
            GOOGLE_CLIENT_ID,
            iOS_CLIENT_ID,
          //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
        })

        if (result.type === "success") {
        this.setState({
            signedIn: true,
            name: result.user.name,
            photoUrl: result.user.photoUrl
        })
        } else {
        console.log("cancelled")
        }
    } catch (e) {
        console.log("error", e)
    }
    }
    render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
        {this.state.signedIn ? (
            <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
            <LoginPage style={styles.header} signIn={this.signIn} />
        )}
        </KeyboardAvoidingView>
    )
    }
}

const LoginPage = props => {
    return (
    <View style={styles.buttonContainer}>
        <Text style={styles.header}></Text>
        <Button title="Sign in with Google" color="#000" onPress={() => props.signIn()} />
    </View>
    )
}

const LoggedInPage = props => {
    return (
    <View style={styles.container}>
    <SignupForm />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    color: '#fff',
    alignItems: "center",
    justifyContent: "center",
    },
    header: {
    fontSize: 105,
    color: '#fff'
    },
    buttonContainer: {
    backgroundColor: '#fff',  
    borderRadius: 10,
    width: 335,
    height: 65,
    marginBottom: 150,
    },
    image: {
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
    }
})

export default LoginButton;