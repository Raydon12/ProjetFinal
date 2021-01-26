import React from 'react';
import { View, StyleSheet,Text} from 'react-native';

function ErrorMessage({error, visible}) {
    if (!error || !visible) return null;
    return (
        <Text style={styles.error}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color:'red',
        fontWeight:'600'
    },
})

export default ErrorMessage;