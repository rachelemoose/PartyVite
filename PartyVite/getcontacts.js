import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Constants, Permissions, Contacts } from 'expo';



export default class App extends React.Component {
  state ={
    allContacts: [],
  }

  componentDidMount () {
    this.getContactsAsync();
  }

  async getContactsAsync() {
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
    if (permission.status !== 'granted'){
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [Contacts.PHONE_NUMBERS],
      sort: Contacts.SortTypes.FirstName, 
      pageSize: 1000, /* how many contacts to grab at one time */
      pageOffset: 0, /* how many pages of contacts to skip */
    })
    this.setState({ allContacts: contacts.data });
  }


  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {this.state.allContacts.map((person, index) => (
          <Text key={index} style ={styles.paragraph}>
            {person.name}
            {'\n'}
            📞 {person.phoneNumbers? person.phoneNumbers[0].number: "no phone"}
          </Text>
        ))}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});