import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants, Permissions, Contacts } from 'expo';
// import { ListItem } from 'react-native-elements'

// import SelectMultiple from 'react-native-select-multiple'



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

  render(props) {
    // console.log(this.props.navigation.state.params.numberSelected)
    return (
      <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
              {this.state.allContacts.map((person, index) => (
                <TouchableOpacity style={styles.pressed} key={index} onPress={() => this.props.navigation.state.params.numberSelected(person.phoneNumbers[0].number)}>
                   <Text 
                  style ={styles.paragraph}>
                    {person.name}
                    {'\n'}
                    📞 {person.phoneNumbers? person.phoneNumbers[0].number: "no phone"}
                  </Text>
                 </TouchableOpacity>
          // console.log(person.phoneNumbers[0].number)
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
  }
});