import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function App(){
  const router = useRouter();
    return(
    <View style={styles.container}> 
     <Text style={styles.text}>SkinQuest</Text>
      <Text style={styles.textDesc}>Your Skincare journey reimagined</Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => router.push("./concerns")}>
        <Text style={styles.buttonText}>Lets begin your journey!</Text>
        </TouchableOpacity>
    </View>
    );
    
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d2b48c"
  },
  buttonText:{
    fontSize : 28,
    color: "#b0e0e6",
    
  },
  button:{
    backgroundColor: "#e9967a",
    padding: 15,
    borderRadius: 27,

  },
  text:{
    fontSize:59,
    fontWeight: "bold",
    color: "#b0e0e6",
    marginBottom: 55,
    
  },
  textDesc:{
    fontSize:20,
    color: "#b8860b",
    marginBottom:40,
  }
});