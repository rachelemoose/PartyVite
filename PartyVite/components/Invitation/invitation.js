import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Keyboard, TextInput } from 'react-native';

const styles = StyleSheet.create({
    inviteButton: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
        top: 250,
    },
    buttonContainer: {
        backgroundColor: '#fd79a8',
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
        backgroundColor: '#fd79a8',
        color: '#fff',
        fontWeight: 'bold',
    }
    
});

class Invitation extends React.Component {
        
    state = {
        // render a conditional render
        _isCreateInvitation: false,
        height: 0
    }

    createInvite = () => {
        console.log("this worked!!!")
        this.setState({
            _isCreateInvitation: true
        })
    }

    renderForm () {
        return (<View style={styles.formView}>
            <TextInput style={styles.inputView} placeholder="Event Title" maxLength={20} onSubmitEditing={Keyboard.dismiss} />
            <TextInput style={styles.inputView} placeholder="Event Type (i.e. Birthday Party" maxLength={20} />
            <TextInput style={styles.inputView} placeholder="Hostname" maxLength={20} />
            <TextInput style={styles.inputView} placeholder="Date" maxLength={20} />
            <TextInput style={styles.inputView} placeholder="Contact" maxLength={20} />
            <TextInput style={styles.inputView} placeholder="Location" maxLength={20} />
            <TextInput style={styles.inputView} placeholder="Address" maxLength={50} />
            <TextInput style={[styles.inputView, {height: Math.max(35, this.state.height)}]} 
                onChangeText={(text) => {
                    this.setState({ text })
                }}
                onContentSizeChange={(event) => {
                    this.setState({ height: event.nativeEvent.contentSize.height })
                }}
            multiline={true} placeholder="Message" maxLength={250} />
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

        const {_isCreateInvitation} = this.state;

        if (_isCreateInvitation) {
            return this.renderForm()
        } else {
            return this.renderButton()
        }
        
    }
}

export default Invitation;