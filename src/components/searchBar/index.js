import React from 'react'
import { TextInput,View,TouchableOpacity } from 'react-native'
import styles from './style'


export default function Search(){

    return(
          <View  style = {styles.containerSearch}>
              <TextInput
               placeholder="Digite a peita que você deseja"
               style = {styles.inputSearch}
               >
                   
               </TextInput>
          </View>      

        );

}