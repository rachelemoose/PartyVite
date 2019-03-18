import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants, Permissions, Contacts } from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showFirstContactAsync}>
          <Text style={styles.paragraph}>
            Get first contact by ID!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  showFirstContactAsync = async () => {
    // Ask for permission to query contacts.
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      console.log("Permission denied!")
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    
    if (contacts.total > 0) {
      var firstId = contacts.data[0].id;
    }
    
    const contactById = await Contacts.getContactByIdAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS,
      ],
      id: firstId,
    });
    console.log("Fetched contact by id:" + JSON.stringify(contactById))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    backgroundColor: '#ccccff',
  },
});