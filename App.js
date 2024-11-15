import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, SectionList} from 'react-native';

const styles = StyleSheet.create({
  border: {
    borderWidth: 3,
    flexDirection: "column",
    flex:1,
  },

  headerStyle: {
    fontSize:25,
    margin: 10,
    textAlign:'center',
    fontWeight: 'bold',
    borderWidth:2
  },

  itemContainer:{
    marginBottom: 50,
    margin:30,
    flex:1,
  },

  name:{
    fontSize:15,
    justifyContent:'flex-start',
  },

  img:{
    margin:10,
    width: 330,
    height: 200,
    justifyContent:'flex-end',
  }
})

const datasource = [
  {
    title: "Heartslabyul",
    bgColor: "red",
    data: [
      {name: 'Riddle Rosehearts', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\riddle.jpg')},
      {name: 'Ace Trappola', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\ace.jpg')},
      {name: 'Deuce Spade', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\deuce.jpg')},
      {name: 'Trey Clover', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\trey.jpg')},
    ],
  },

  {
    title: "Diasomnnia",
    bgColor: "#6FD904",
    data: [
      {name: 'Malleus Draconia', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\malleus.jpg')},
      {name: 'Silver', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\silver.jpg')},
      {name: 'Sebek Zigvolt', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\sebek.jpg')},
      {name: 'Lilia Vanrouge', image: require('C:\\C346 Projects\\L05_Exercise4\\TWST_image\\lilia.jpg')},
    ]
  }
]

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.border}>
        <Text style={styles.name}> {item.name} </Text>
        <Image source={item.image} style={styles.img}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.itemContainer}>
        <StatusBar hidden={true}/>
        <SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={({section:{title, bgColor}}) =>(
            <Text style={[styles.headerStyle, {backgroundColor: bgColor}]}>{title}</Text>
        )}/>
      </View>
  )
}
export default App;
























