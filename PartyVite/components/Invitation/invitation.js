import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import axios from 'axios';

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
    inputView: {
        height: 40,
        paddingHorizontal: 6,
        backgroundColor: '#fd79a8',
        color: '#fff',
        fontWeight: 'bold',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 10,
    },
    sendButton: {
        textAlign: 'center',
        fontWeight: "700",
        color: '#fff',
        fontSize: 20,
        
    },
    keyboardStyle: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center'
    }
    
});

class Invitation extends React.Component {
        
    state = {
        
        _isCreateInvitation: false,
        height: 0,
        isVisible: false,
        currentDate: new Date(),
        markedDate: moment(new Date()).format('dddd, MMMM Do YYYY'),
        name: '',
        behavior:'padding'
    }

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            markedDate: moment(date).format('dddd, MMMM Do YYYY'),
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    createInvite = () => {
        this.setState({
            _isCreateInvitation: true
        })
    }

    sendInvite = () => {
        const { eventTitle, eventType, hostname,
            markedDate,
            contact,
            location,
            address,
            message }  = this.state ;

        axios.post(
            'https://fierce-sea-42604.herokuapp.com/invite', 
            {
                invitees: [contact],
                message: 
                    `You've been invited to ${eventTitle}! It's a ${eventType} hosted by ${hostname} on ${markedDate} at ${location}: ${address}. ${hostname} says "${message}" \n \nRSVP by: \nSend 'Yes' if you can make it\n'No' if you can't attend\n'Maybe', if you're not sure.`
            },

        ).then(response => {
            this.setState({_isCreateInvitation: false})
        }).catch(err => {
            Alert.alert('Please enter a valid phone number.')
        })
    }

    changeKeyboardView = () => {
        this.setState({
            behavior: 'position'
        })
    }

    renderForm () {
        return (<KeyboardAvoidingView style={styles.keyboardStyle} behavior={this.state.behavior} enabled keyboardVerticalOffset={100}>
            <ScrollView>
            <View>
                <TextInput 
                    style={styles.inputContainer} 
                    placeholder="Event Title" 
                    placeholderTextColor="#fff" 
                    maxLength={20} 
                    onSubmitEditing={() => { this.secondTextInput.focus(); }} 
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='eventTitle'
                    value={this.state.eventTitle}
                    onChangeText={eventTitle => this.setState({eventTitle})}
                />

                <TextInput
                    style={styles.inputContainer} 
                    placeholder="Event Type (i.e. Birthday Party)" 
                    placeholderTextColor="#fff" 
                    maxLength={20} 
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }} 
                    ref={(input) => { this.secondTextInput = input; }} 
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='eventType'
                    value={this.state.eventType}
                    onChangeText={eventType => this.setState({eventType})}
                />

                <TextInput 
                    style={styles.inputContainer} 
                    placeholder="Hostname" 
                    placeholderTextColor="#fff" 
                    maxLength={20} 
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }} 
                    ref={(input) => { this.thirdTextInput = input; }} 
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='hostname'
                    value={this.state.hostname}
                    onChangeText={hostname => this.setState({hostname})}
                />

                <TouchableOpacity onPress={this.showPicker}>
                    <TextInput 
                        style={styles.inputContainer} 
                        placeholder="Date" 
                        placeholderTextColor="#fff" 
                        maxLength={20} 
                        onSubmitEditing={() => { this.fifthTextInput.focus(); }} 
                        ref={(input) => { this.fourthTextInput = input; }} 
                        returnKeyType='next' 
                        blurOnSubmit={ false } 
                        value={this.state.markedDate} 
                        name='date'
                        onChangeText={dateField => this.setState({dateField})}
                    /> 
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                />

                <TextInput 
                    style={styles.inputContainer} 
                    placeholder="Contact" 
                    placeholderTextColor="#fff" 
                    // maxLength={20} 
                    onSubmitEditing={() => { this.sixthTextInput.focus(); }} 
                    ref={(input) => { this.fifthTextInput = input; }}  
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='contact'
                    value={this.state.contact}
                    onChangeText={contact => this.setState({contact})}
                />

                <TextInput 
                    style={styles.inputContainer} 
                    placeholder="Location" 
                    placeholderTextColor="#fff" 
                    maxLength={20} 
                    onSubmitEditing={() => { this.seventhTextInput.focus() 
                        this.setState({behavior:'position'})}} 
                    ref={(input) => { this.sixthTextInput = input; }}  
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='location'
                    value={this.state.location}
                    onChangeText={location => this.setState({location})}
                />

                <TextInput 
                    style={styles.inputContainer} 
                    placeholder="Address" 
                    placeholderTextColor="#fff" 
                    maxLength={50} 
                    onSubmitEditing={() => { this.eigthTextInput.focus(); }} 
                    ref={(input) => { this.seventhTextInput = input; }} 
                    returnKeyType='next' 
                    blurOnSubmit={ false } 
                    name='address'
                    value={this.state.address}
                    onChangeText={address => this.setState({address})}
                    onPress={() => this.changeKeyboardView()}
                />

                <TextInput 
                    style={[styles.inputContainer, {height: Math.max(35, this.state.height)}]} 
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                    onContentSizeChange={(event) => {
                        this.setState({ height: event.nativeEvent.contentSize.height })
                    }}
                    multiline={true} 
                    placeholder="Message" 
                    placeholderTextColor="#fff" 
                    maxLength={250} 
                    ref={(input) => { this.eigthTextInput = input; }} 
                    name='message'
                    value={this.state.message}
                    onChangeText={message => this.setState({message})}
                    onPress={() => this.changeKeyboardView()}
                />

                <TouchableOpacity onPress={this.sendInvite}>
                    <Text 
                    style={styles.sendButton}>Send Invitation
                    </Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
        )
    }

    renderButton () {
        return (
        <View style={styles.inviteButton}>
            <TouchableOpacity onPress={this.createInvite} style={styles.buttonContainer}>
                <Text 
                style={styles.buttonText}>Create Invitation
                </Text>
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