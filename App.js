import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, TouchableHighlightBase, View, TextInput} from 'react-native';


export default class App extends Component {
   constructor(){
      super();
        
     
  this.state ={
  
  }


  }
  
  

  render() {
  return (
    
  <View style={styles.container}>


  <view style={{padding: 10}} />


  <text style={{color: '#0A0D10'}}><br /> Please enter any string here: </text>
  
  
  <Input 
  style={styles.input} />

  <button>Analyzer</button><br/>
  <text>Total word is: </text>
  <text>Total Consonant is:  </text>
  <text>Total Vowel is: </text>

  </View>
  );
  }
}

  const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#FFF',
  },
  
    Thename:{
      color: '#0A0D10',
      textAlign: 'center',
      margin: 10,
    },
    contents: {
    textAlign: 'center',
    color: '#0A0D10',
    marginBottom: 5,
    margin: 10,
    },
    Thecolor: {
      color: '#0A0D10',
      textAlign: 'center',
      margin: 10,
      fontSize: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: '#777', 
      padding: 8,
      margin: 10, 
      width: 200,
      

    }

})
//I try run this code but shows some errors //
// import React, {Component, useState} from 'react';
// import {Button, StyleSheet, Text, TouchableHighlightBase, View, TextInput} from 'react-native';


// export default class App extends Component {
//   constructor(){
//   super();
//   this.info = { 
  
//   }
//   this.state ={
//     count: 0
//   }


//   }
 
//   render() {
//     return (
      
//     <View style={styles.container}>
  
  
//     <view style={{padding: 10}} />
  
  
//     <text style={{color: '#0A0D10'}}><br /> Please enter any string here: </text>
    
    
//     <Input 
//     style={styles.input} />
  
//     <button>Analyzer</button><br/>
//     <text>Total word is: </text>
//     <text>Total Consonant is:  </text>
//     <text>Total Vowel is: </text>
  
//     </View>
//     );
//     }
//   }
  
//     const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     },
    
//       Thename:{
//         color: '#0A0D10',
//         textAlign: 'center',
//         margin: 10,
//       },
//       contents: {
//       textAlign: 'center',
//       color: '#0A0D10',
//       marginBottom: 5,
//       margin: 10,
//       },
//       Thecolor: {
//         color: '#0A0D10',
//         textAlign: 'center',
//         margin: 10,
//         fontSize: 12,
//       },
//       input: {
//         borderWidth: 1,
//         borderColor: '#777', 
//         padding: 8,
//         margin: 10, 
//         width: 200,
        
  
//       }
  
//   })