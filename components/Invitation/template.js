import React from 'react';
// import Invitation from '../Invitation/invitation';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

class Template extends React.Component {


    render() {
      
      return (
        <View>
         
          <TextInput placeholder="Event Title" maxLength={20} />
          <TextInput placeholder="Event Type" maxLength={20} />
          <TextInput placeholder="Hostname" maxLength={20} />
          <TextInput placeholder="Date" maxLength={20} />
          <TextInput placeholder="Contact" maxLength={20} />
          <TextInput placeholder="Location" maxLength={20} />
          <TextInput placeholder="Address" maxLength={20} />
          <TextInput placeholder="Message" maxLength={20} />
        </View>
      );
    }
}

export default Template;