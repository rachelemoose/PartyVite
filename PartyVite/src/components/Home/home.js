import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

class Home extends React.Component {
    render() {
        return(
        <View>
            <Text style={styles.welcome}>
                Welcome to PartyVite!
            </Text>
        </View>
        )
    }
}

export default Home;