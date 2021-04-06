import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends Component{

        render(){
            return(
               <View style={{flex:1}}>
                       <View style={styles.drawerItemsContainer}>
                           <DrawerItems {...this.props}/>
                       </View>
                       <View style={styles.logoutContainer}>
                           <TouchableOpacity style={styles.logoutButton}
                              onPress={()=>{
                                  this.props.navigation.navigate('UserSignUpScreen')
                                  firebase.auth().signOut()
                              }}>
                            <Text style={styles.logOutText}>
                                Logout
                            </Text>
                            </TouchableOpacity>
                       </View>
               </View>
            )
        }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    drawerItemsContainer:{
        flex:0.8
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30
    },
    logOutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
    },
      logOutText: {
        fontSize: 15,
        fontWeight: "comic",
      },
})