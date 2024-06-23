import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function CalcButtons({value,setValue}) {
    const handleClick=(val)=>{
        if(val==='=')
            handleCalculate()
        else if(val==='C')
            setValue('')
        else if(val==='<-')
            setValue(value.slice(0,value.length-1))
        else
        setValue(value+val)
    }
    const handleCalculate=()=>{
        setValue(eval(value))
    }
    buttons = ['1', '2', '3','C', '4', '5', '6', '<-','7', '8', '9', '+', '0', '*', '/', '-', '.', '(', ')', '=']
    return (
        <View className="flex flex-row justify-center flex-wrap p-1 ">
            {buttons.map((bt) => {
                return (
                    <TouchableOpacity
                        key={bt}
                        className="m-1 w-1/5 flex flex-row justify-center"
                        onPress={()=>{handleClick(bt)}}
                        value={bt}
                    >
                        <View className="bg-gray-500 focus:bg-blue-500 rounded-full h-20 w-20  flex items-center justify-center">
                            <Text className=" text-white text-xl font-bold text-center">{bt}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
