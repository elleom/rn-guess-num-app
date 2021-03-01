import React from 'react';
import { TextPropTypes } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Game is over</Text>
            <Text>Number of rounds : {props.roundsNumber}</Text>
            <Text>Number was : {props.userNumber}</Text>
            <Button title='RESTART'  onPress={props.onRestartGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default GameOverScreen;