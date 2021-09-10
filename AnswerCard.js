import React, { useState } from 'react';
import { View, Text,StyleSheet, useWindowDimensions } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import RenderHtml from 'react-native-render-html';


const styles = StyleSheet.create({
    a: {
      fontWeight: '300',
      color: '#FF3366', // make links coloured pink
    },
    
  });
export default function AnswerCard(props) {
  const { a_id, a_score, a_display_name, a_body } = props;
  // const [ClickedQuestion, setClickedQuestion] = useState(false);
  
  const { width } = useWindowDimensions(); //problematic 
  
  
  
  return (
    
    <Card>

      <Text>Answered By: {a_display_name}</Text>
      <Text>Score: {a_score}</Text>
      
      { (
        <RenderHtml
        // contentWidth={width}
        source={{html:a_body}}
        
      />
      )}
    </Card>
   
  );
}


  