import { Alert, Button, StyleSheet, TextInput, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import  'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { logOutAction } from '../../../store/actions/logOutAction'
import listPro from '../ProfilProfessionel/listPro'
import { SafeAreaView } from 'react-native-safe-area-context'
const ProfileScreen = (props) =>{
   return(
     <SafeAreaView style={{flex:1}}>
       <View style={{flex:0.5,alignItems:'center'}}>
       <Image style={styles.profilImage}
              source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}>

    </Image>
       <Text style={{fontWeight:"bold"}}>{props.user.firstName} {props.user.lastName}</Text>
       <Text>Rajouter ici une note user (newbie vers acharne de la bouffe )</Text>
       <Text style={styles.button}>Reservations</Text>
    </View>

      

 

</SafeAreaView>
   )
  
}
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  button:{
    borderRadius:64, width:200,
    height:40,marginTop:30,backgroundColor:'tomato',color:'white',
    textAlign:'center',textAlignVertical:'center',fontWeight:'bold',
    shadowColor:'#000',shadowOffset:{ width:0,height:5}, elevation:10,
    shadowRadius:2,shadowOpacity:0.8
  },
  profilImage:{
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10
  },
  flex:{
    alignItems:'flex-end'
  }
})

const mapStateToProps = (state) => {
  return state
  }
export default connect(mapStateToProps)(ProfileScreen);