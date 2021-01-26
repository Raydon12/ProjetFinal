import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppButton({name,width = '100%',height,...otherProps}) {
    return ( 
        <TouchableOpacity style={[styles.container,{width:width},{height}]}{...otherProps} activeOpacity={0.6} >
           
            <Text style={styles.button} {...otherProps}>{name}</Text>
            
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius:25,

        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        marginBottom:20
    },
    button:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:20,

    }
})

export default AppButton;