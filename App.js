import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
import imageOn from './assets/icons/eco-light.png'
import imageOff from './assets/icons/eco-light-off.png'
import imageDioOn from './assets/icons/logo-dio.png'
import imageDioOff from './assets/icons/logo-dio-white.png'




const App = ()=> {
  const [toggle, setToggle] = useState(false)
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    // liga flash do celular
    Torch.switchState(toggle);   
  }, [toggle] );
  useEffect(()=>{
    //quando o celular for chacoalhado, mudaremos o toggle
    const subscription = RNShake.addListener (()=>{
      setToggle(oldToggle => !oldToggle);
    });

    // quando essa função vai ser chamada quando o componente for ser desmontado

    return () => subscription.remove();    
  }, [] );
  
  return <View  style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>

    <Image style={toggle ? style.linghtingOn : style.linghtingOff }
      source={toggle ? imageOn : imageOff}
      />
    <Image style={style.dioLogo}
      source={toggle ? imageDioOn : imageDioOff}
      />

      </TouchableOpacity>
  </View>;
};

export default App

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linghtingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  linghtingOff:{
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  dioLogo:{
    
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,

  },
 

});