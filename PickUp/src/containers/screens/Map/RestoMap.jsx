import { View, Text,Button,Image, ImageBackground, ImageComponent,StyleSheet, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import MapView, {Callout, Marker, PROVIDER_GOOGLE }  from 'react-native-maps'
import { connect } from 'react-redux'
import { ProAction } from '../../../store/actions/ProAction'
import { ListAction } from '../../../store/actions/ListAction'
import { MapAction } from '../../../store/actions/ListMap'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { SafeAreaView } from 'react-navigation'
import SvgC from '../../../logo/renne.svg';
import {Svg,Image as ImageSvg  } from 'react-native-svg'

async function Fletching (props) {

  const url = "https://appservicepickup.azurewebsites.net/api/Resto"
  const response = await fetch(url)
  const data = await response.json()
  return  props.MapAction(data)
//   fetch("https://appservicepickup.azurewebsites.net/api/Resto")
//  .then((response)=> response.json())
//  .then((data)=>props.ListAction(data))
//  .catch((error)=> console.log(error))

 }
  const RestoMap = (props)=>{
  useEffect(()=>{
    Fletching(props)
  },[])
 
    return (
      // <View><Text>test</Text></View>

         <MapView
         provider={PROVIDER_GOOGLE}
         style={{flex:1}}
         initialRegion={{
         latitude: 50.60730,
         longitude: 4.89186,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
        
      >
         {props.list?.map((marker,index)=>(
          <Marker
          key={index}
      
          coordinate={{latitude : marker.latitude, longitude: marker.longitude}}
          title={marker.name}
          description={marker.description}
          
          
          
        >
         <Callout tooltip key={index}  onPress={()=> {props.navigation.navigate('la')
                props.ProAction(marker)}} style={{flex:1}}>
                <CalloutComponent{...marker}></CalloutComponent>
         </Callout>
        </Marker>
        ))}
       </MapView>

    )
} 
const mapStateToProps = (state) => ({
  list : state.list.list,
  map: state.list.map
})
const mapDispatchToProps ={
  ListAction,
  ProAction,
  MapAction
}
const CalloutComponent =(marker)=>{
  return(
    <View style={{flex:1,textAlign:'center',flexDirection:'row',backgroundColor:'#fff',borderRadius:10,paddingHorizontal:10}}>
                  
                    <Svg width={75} height={'100%'}  style={{flex:1}} preserveAspectRatio='none'>
                      <ImageSvg width={'100%'}height={'100%'} preserveAspectRatio="xMidYMid meet" href={{uri:marker.logo}}>
                      </ImageSvg>
                    </Svg>
                   
                 <View style={{flex:1,flexDirection:"column",backgroundColor:'#fff',borderRadius:10,paddingHorizontal:10}} re>
                    <Text style={{textAlign:'center',fontWeight:'bold'}}>{marker.name}</Text>
                    <Text style={{textAlign:'center'}}>{marker.adressStreet} </Text>
                    <Text style={{textAlign:'center'}}>{marker.adressNum} {marker.adresseZip}</Text>
                  <Text style={{textAlign:'center' }} title='Reserver'>Reserver</Text>
                  </View>
               </View>  
               
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },
  bold:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  allCenter: {
    justifyContent:'center',
    alignItems:"center",
    margin:10
  },
  mtrois: {
   margin:15
  },
  logo:{
    width:100,
    height:100
  },
  backgLogo:{
    backgroundColor:'#ffffff'
  }
  ,cardText:{
    height:'fit-content'
  }
});
export default connect(mapStateToProps,mapDispatchToProps)  (RestoMap);
