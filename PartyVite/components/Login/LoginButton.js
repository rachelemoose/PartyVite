import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import SignupForm from '../Signup/SignupForm';
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
            "311655794842-klg24937ksv6hplvtd1t9obedimcqdj7.apps.googleusercontent.com",
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
        <View style={styles.container}>
        {this.state.signedIn ? (
            <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
            <LoginPage style={styles.header} signIn={this.signIn} />
        )}
        </View>
    )
    }
}

const LoginPage = props => {
    return (
    <View style={styles.buttonContainer}>
        <Text style={styles.header}></Text>
        <Button title="Sign in with Google" color="#fff" onPress={() => props.signIn()} />
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
    backgroundColor: '#fd79a8',  
    borderRadius: 10,
    width: 335,
    height: 65
    },
    image: {
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
    }
})

// class LoginButton extends React.Component {
//     render(props) {
//         return (
//             <View style={styles.container}>
//             <TouchableOpacity style={styles.buttonContainer} 
//             onPress = {this.handleClick}
//             >
//                     <Button title="Sign in with Google" onPress={() => props.signIn()} />

//             </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 400,
//         padding: 20,
//     },
//     buttonContainer: {
//         backgroundColor: '#ffffff',
//         paddingVertical: 15,
//         borderRadius: 10,
//     },
//     buttonText: {
//         textAlign: 'center'
//     }
// });

export default LoginButton;