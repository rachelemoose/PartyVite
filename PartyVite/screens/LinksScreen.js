import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import Invitation from '../components/Invitation/invitation';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Invitation />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#A33856',
  },
});
