import React, { useState } from 'react'
import { StyleSheet,View, Text, TextInput, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import ListPro from './listPro'

const CommercantScreen = () =>{

        return(
        
            <ScrollView>
             <ListPro></ListPro>
            </ScrollView>
        )

}

export default CommercantScreen;