import React, { useState } from 'react'
import { StyleSheet,View, Text, TextInput, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { logOutAction } from '../../../store/actions/logOutAction'

const Setting =(props)=>{
    return(
        <SafeAreaView>
        <View>
            <Text onPress={()=> {props.logOutAction()}}>Deconnexion</Text>
        </View>
        </SafeAreaView>
    )
}

  const mapDispatchToProps = {
    logOutAction
}
export default connect(null,mapDispatchToProps) (Setting);