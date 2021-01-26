import React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import colors from '../../config/colors';

function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon &&<MaterialIcons name={icon} size={20} style={styles.icon}></MaterialIcons>}
            <TextInput style={styles.TextInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius:25,
        flexDirection:'row',
        width:"100%",
        padding:15,
        marginVertical:10,
        backgroundColor: colors.light

    },
    icon:{
        marginRight:5,
        justifyContent:'center',
        
        
    },
    TextInput:{
        fontSize:18,
        width:"100%"

    }
})

export default AppTextInput;