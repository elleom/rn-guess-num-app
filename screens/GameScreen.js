import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert} from 'react-native';
import {useState} from 'react';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';



//first create a guess (has to be outside the GameScreen component )
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min); //Returns the smallest integer greater than or equal to its numeric argument.
    max = Math.floor(max) //Returns the greatest integer less than or equal to its numeric argument.
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        //recursion
        return generateRandomBetween(min, max, exclude); 
    } else { //break rec
        return rndNum;
    }

}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,99, props.usersChoice)); //if state has a value them wont be re-called
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0)

    const { usersChoice, onGameOver} = props;
    useEffect(() => { // use effect behavior, after every render the function gets executed
        if (currentGuess == props.usersChoice) {
            props.onGameOver(rounds);

        }
    },[currentGuess, usersChoice, onGameOver]);
    
    
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.usersChoice ) || (direction === 'higher' && currentGuess > props.usersChoice))  {
           Alert.alert('Mmm', 'Dont lie', [{text: 'OK', style: 'cancel' }]);
           return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
            
        }

        else ( direction === 'higher') {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow, currentHigh, currentGuess);
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds + 1);
    }
    return (
        <View style={styles.screen}>
            <Text>CPU's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Button title="LOWER" onPress={ nextGuessHandler.bind(this, 'lower') }/>
                <Button title="HIGHER" onPress={ nextGuessHandler.bind(this, 'higher') } />
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth:'80%',

    }


})

export default GameScreen;