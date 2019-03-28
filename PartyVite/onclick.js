import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import getcontacts from './getcontacts';


class HomeScreen extends React.Component {


  state ={
    number: [],
  }

numberSelected = (phoneNumber) => {
this.setState({number: [...this.state.number, phoneNumber]})
}

  render() {
    // console.log(this.state)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Button"
          onPress={() => this.props.navigation.navigate('Contacts', {numberSelected: this.numberSelected})}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Contacts: getcontacts
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}