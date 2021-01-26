import React, { useCallback, useEffect, useState } from 'react'
import {View, Text, StyleSheet,RefreshControl} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import{FlatList} from'react-native'
import { connect } from 'react-redux';
import { ProAction } from '../../../store/actions/ProAction';
import {ListAction} from '../../../store/actions/ListAction';
import { ListItem, Avatar } from 'react-native-elements'
import { CategoryAction } from '../../../store/actions/CategoryAction';
import { setStatusBarHidden } from 'expo-status-bar';
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

 async function Fletching (props) {
   const URL = "https://appservicepickup.azurewebsites.net/api/ProUser"
   const response = await fetch(URL)
   const data = await response.json()
   return  props.ListAction(data)
}
async function FlecthingTri (props){
  const URL = "https://appservicepickup.azurewebsites.net/api/Category"
  const reponse = await fetch(URL)
  const data = await reponse.json()
  return  props.CategoryAction(data)
}
async function Triage([index,props]){
  const i = index +1
  const url ="https://appservicepickup.azurewebsites.net/api/ProUser/Category/"
  const response = await fetch(url+i.toString())
  const data = await response.json()
   return props.ListAction(data)
}
const ListPro = (props) => {

const [refreshing,SetRefreshing]= useState(false)
const [extraData,SetExtraData]= useState(1)
const onRefresh = useCallback(()=>{
  SetRefreshing(true);
  wait(2000).then(()=>SetRefreshing(false));
  Fletching(props)

},[])

    useEffect(() => {
        Fletching(props);
        FlecthingTri(props);
    }, [])

    return(
     
          <View>
           <ScrollView   horizontal={true} style={{    borderBottomWidth: 0,
                shadowColor: '#2d88ff',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                marginTop:10,
                shadowRadius: 2,
                elevation: 10,}} >
             {props.listTri.map((item,index) =>(
               <ListItem onPress={()=>Triage([index,props])} key={index}>
               <ListItem.Content>
         <ListItem.Title style={{color:'#2d88ff',}}>{item.name}</ListItem.Title>
       </ListItem.Content>
       </ListItem>
             ))}
              </ScrollView>

            <FlatList
             refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
           horizontal={false}
            data = {props.list}
            keyExtractor ={(item)=> item.id.toString() }
            renderItem={({item,index})=>(
        <ListItem style={{    borderBottomWidth: 0,
          shadowColor: '#000',
          marginBottom:10,
          marginTop:10,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          maxHeight:200,
          elevation: 3,}} bottomDivider  onPress ={()=>{props.navigation.navigate('la')
        props.ProAction(item)
}} >
        <Avatar  source={{uri: item.logo}} resizeMode="contain"  />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight:'bold'}}>{item.name}</ListItem.Title>
          <ListItem.Subtitle style={{maxHeight:30}}>{ item.description.length > 30?  item.description.substring(0,30) +" (...)" : item.description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
            )}/>
            </View>
);
  }
    const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            alignItems:"center",
            margin:20
        },
        bigBlue: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 30,
        },
        red: {
          color: 'red',
        },
        bold:{
          fontWeight: "bold",
          marginVertical:10
        }
      });
const mapStateToProps = (state) => ({
    list : state.list.list,
    listTri : state.list.listTri
  })
  const mapDispatchToProps = {
    ProAction,
    ListAction,
    CategoryAction
}
export default connect(mapStateToProps,mapDispatchToProps) (ListPro);