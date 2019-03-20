import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, TextInput } from 'react-native';

const styles = StyleSheet.create({
    inviteButton: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
        top: 250,
    },
    buttonContainer: {
        backgroundColor: '#fd79a8',
        // backgroundColor: '#A33856',
        paddingVertical: 15,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: "700",
        color: '#fff',
        fontSize: 20
    },
    formView: {
        
    },
    inputView: {
        height: 40,
        paddingHorizontal: 6,
        borderBottomColor: '#2980b9',
    }
    
});

class Invitation extends React.Component {
        
    state = {
        // render a conditional render
        _isCreateInvitation: false
    }

    createInvite = () => {
        console.log("this worked!!!")
        this.setState({
            _isCreateInvitation: true
        })
    }

    renderForm () {
        return (<View style={styles.formView}>
            <TextInput style={styles.inputView} placeholder="Event Title" maxLength={20} />
            <TextInput placeholder="Event Type" maxLength={20} />
            <TextInput placeholder="Hostname" maxLength={20} />
            <TextInput placeholder="Date" maxLength={20} />
            <TextInput placeholder="Contact" maxLength={20} />
            <TextInput placeholder="Location" maxLength={20} />
            <TextInput placeholder="Address" maxLength={50} />
            <TextInput placeholder="Message" maxLength={250} />
        </View>)
    }

    renderButton () {
        return (
        <View style={styles.inviteButton}>
            <TouchableOpacity onPress={this.createInvite} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create Invitation</Text>
            </TouchableOpacity>
        </View>
        )
    }

    render() {

        // const { slideUp} = this.state;
        const {_isCreateInvitation} = this.state;

        if (_isCreateInvitation) {
            return this.renderForm()
        } else {
            return this.renderButton()
        }
        
    }
}

export default Invitation;