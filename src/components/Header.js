import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Statefull
// class Header extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>HHHHEEEAAAADDDDEEEERRRR</Text>
//       </View>
//     );
//   }
// }


//Stateless Component
const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.text}>{props.label}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 0.5,
    backgroundColor: '#6ca2f8',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#FFF',
  }
});

 export default Header; 