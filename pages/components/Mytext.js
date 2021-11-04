import React from 'react';
import {Text, StyleSheet} from 'react-native';


const Mytext = (props) => {
   return <Text style={styles.text}>{props.text}</Text>
};

const styles = StyleSheet.create({
    text: {
        color: '#111825',
        fontSize: 18,
        marginTop: 16,
        marginRight: 35,
        marginLeft: 25
    }
});

export default Mytext;