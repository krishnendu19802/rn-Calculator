import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Result from "./Result";
import CalcButtons from "./CalcButtons";



export default function Calculator() {
    const [value,setValue]=useState(0)
    return (

        <SafeAreaView className="bg-gray-800 flex-1 mt-10 flex flex-col  justify-end">
            
            <Result value={value} />
             <CalcButtons setValue={setValue} value={value} />
          
        </SafeAreaView>


    )
}

