import React from 'react';
import api  from '../API';
import Separator from './Separator';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

var styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  }
});

const DefinitionsList=({definitions})=>{

  var list = definitions.map((item, index) => {
     return (
       <View key={index}>
         <View style={styles.rowContainer}>
           <Text>{definitions[index].name}</Text>
         </View>
         <Separator />
       </View>
     )
   });

  return(
    <View style={styles.mainContainer}>
      {list}
    </View>
    )
};

export default DefinitionsList;
