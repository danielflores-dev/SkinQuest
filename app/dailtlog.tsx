import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DailyLog(){
    const router = useRouter();
    const [products, setproducts] = useState([

        {id: 10, text: "Cleanser", selected: false},
        {id: 11, text: "Moisturizer", selected: false},
        {id: 12, text: "SunScreen", selected: false},
    ]);
function toggleDailyLog(id){
    setproducts((prev)=>{
    return prev.map((item)=>{
      if (item.id === id){
        return {...item, selected: !item.selected};
      } else {
        return item;
      }
    
  })});
  }
  return (
    <View style={{backgroundColor:"#d2b48c", flex: 1, alignItems: "center", justifyContent: "space-between" , paddingVertical:50}}>
    <Text style={{fontSize: 24, color: "#b0e0e6", fontWeight:"bold"}}>Select Your Skincare Products!</Text>

    {products.map((item) =>(
    <TouchableOpacity
    key={item.id}
    onPress= {() => toggleDailyLog(item.id)}
    style={[styles.card,  {backgroundColor: item.selected ? "green" : "#e9967a", 
     }]}    
    >
    <Text style={{ fontSize: 20, color: "gold", padding: 5}}>
            {item.text}
            </Text>
    </TouchableOpacity>

    ))}

    </View>
)}

const styles = StyleSheet.create({
    card:{
      padding : 15,
      margin : 5,
      borderRadius : 10,
      borderWidth : 0,
      width: "80%",
      alignItems: "center",  
      
      

    }})