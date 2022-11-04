import { StatusBar } from 'expo-status-bar';
import { useEffect,useRef } from 'react';

import { Animated, Text, View, StyleSheet, Button, SafeAreaView,Image,Easing } from "react-native";
export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(10)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(300)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  
  useEffect(()=>{
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000
    }).start();
  })

  const changeMaybay = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim1, {
      toValue: 300,
      duration: 5000
    }).start();
  };
  const changeImageandText = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 3000
    }).start();
    Animated.timing(fadeAnim3, {
      toValue: 0,
      duration: 3000
    }).start();
  };
  // const spin = ()=>  {
 
    // Animated.timing(
    //   fadeAnim4,
    //   {
    //     toValue: 1,
    //     duration: 4000,
    //     easing: Easing.linear
    //   }
    // ).start(() => this.spin())
  // }

  useEffect(()=>{
    
    Animated.timing(
      fadeAnim4,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start()
    
  })
  const spin = fadeAnim4.interpolate({
    inputRange: [0,0.5, 1],
    outputRange: ['0deg', '-60deg','60deg']
  })
  return (
    <View style={styles.container}>
      <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{opacity:fadeAnim}}> 
          <Text style={{fontSize:22,fontWeight:'bold'}}>Welcom to Animation React Native</Text>
        </Animated.View>
      </View>
      <View style={{flex:0.1,justifyContent:'center',width:"100%"}}>
        <Animated.View style={{marginLeft:fadeAnim1}}> 
          <Image style={{width:50,height:50}} source={require('./image/images.png')}></Image>
        </Animated.View>
        <Button title="animation may bay" onPress={changeMaybay} />
      </View>
      <View style={{flex:0.2,justifyContent:'center',width:"100%"}}>
        <Animated.View style={{opacity:fadeAnim2}}> 
          <Image style={{width:50,height:50}} source={require('./image/hinhtron.png')}></Image>
        </Animated.View>
        <Animated.View style={{marginLeft:fadeAnim3}}> 
          <Text>Hinh tron</Text>
        </Animated.View>
        <Button title="animation image ad text" onPress={changeImageandText} />
      </View>
      <View style={{flex:0.2,justifyContent:'center',alignItems:'center',width:"100%"}}>
        <Animated.Image 
        style={{
          width: 90,
          height: 100,
          transform: [{rotate: spin}] }}
          source={require('./image/chuong.png')}
        >
        </Animated.Image>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
