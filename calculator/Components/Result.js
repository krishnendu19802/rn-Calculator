import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result({ value }) {
    return (
      <View style={styles.container}>
        <Text style={{...styles.text, fontSize:value.length>12?25:40}}>{value}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: 200,
      backgroundColor: '#374151',
      justifyContent: 'flex-end', // Center the text vertically
      alignItems: 'flex-end', // Center the text horizontally
      padding:20,
      margin:10,
      borderRadius:10
    },
    text: {
      fontSize: 20,
      color: 'white',
      
    },
  });
// className="text-white text-2xl h-48 bg-gray-600 rounded m-2 p-4 flex flex-row text-right justify-end"