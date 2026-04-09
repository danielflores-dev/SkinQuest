import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { db } from "./firebaseConfig";





export default function App(){
  const router = useRouter();
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    async function checkSave() {
      try {
        const docSnap = await getDoc(doc(db, "users", "player1"));
        if (docSnap.exists()) {
          setHasSave(true);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
    checkSave();
  }, []);


    return(
    <View style={styles.container}> 
     <Text style={styles.text}>SkinQuest</Text>
      <Text style={styles.textDesc}>Your Skincare journey reimagined</Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => router.push("./concerns")}>
        <Text style={styles.buttonText}>Lets begin your journey!</Text>
        </TouchableOpacity>

      {hasSave && (
        <TouchableOpacity
          style={{ backgroundColor: "green", padding: 15, borderRadius: 27, marginTop: 20 }}
          onPress={() => router.push("./facemodel")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Continue Progress</Text>
        </TouchableOpacity>
      )}


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