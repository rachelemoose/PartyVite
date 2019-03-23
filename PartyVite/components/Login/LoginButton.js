import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class LoginButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} 
            onPress = {this.handleClick}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 330,
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: '#fd79a8',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    }
});

export default LoginButton;