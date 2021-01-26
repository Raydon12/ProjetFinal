import { View, Text,StyleSheet,Image,RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import { ListReservationAction } from '../../../store/actions/ListReservationAction'
import { ListItem, Avatar } from 'react-native-elements'
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function Fetch (props)
{
    fetch("https://appservicepickup.azurewebsites.net/api/Reservation/User/"+props.user.id )
    .then((response)=> response.json())
    .then((data)=>props.ListReservationAction(data))
    .catch((error)=> console.log(error))
}

const Reservation = (props) =>{
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    
        wait(1000).then(() => setRefreshing(false));
        Fetch(props)
      }, []);
useEffect(()=>
{
 Fetch(props)
},[])
 
        return(
            <SafeAreaView style={styles.mainContainer}>
            <View style={styles.flex}>
                <Text style={styles.title}>
                Voici les différentes réservations que vous avez effectuer
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <FlatList
            data = {props.reso.reserveUser}
            keyExtractor ={(item)=> item.id.toString() }
            renderItem={({item,index})=>(
        <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.restoName}</ListItem.Title>
          <ListItem.Subtitle>{item.dateRes}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
            )}
            />
            </ScrollView>
            </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    mainContainer :{
       flex:1 
    },
    image:{
        width : 50,
        height : 50
    },
    flex:{
        flexDirection:"row"
    },
    reservation:{
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#000000'
    },
    title :{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:22,
        marginBottom:50
    },
    textReservation:{
       marginBottom:10 ,
       textAlignVertical:'center'
       
    }

})
const mapStateToProps = (state) => ({
user : state.user,
reso : state.reservation,
resto : state.pro
})
const mapDispatchToProps = {
    ListReservationAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Reservation);