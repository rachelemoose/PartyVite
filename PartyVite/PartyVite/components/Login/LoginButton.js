import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

// handleClick = () => {
//     alert('button clicked')
// }

class LoginButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} 
            // onPress = {this.handleClick}
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
        marginTop: 400,
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center'
    }
});

export default LoginButton;