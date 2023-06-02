import React, { useState } from 'react';
import { View, Text,StyleSheet, useWindowDimensions } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import RenderHtml from 'react-native-render-html';


const styles = StyleSheet.create({
    a: {
      fontWeight: '350',
      color: '#FF3366', // make links coloured pink
    },
    
  });
export default function AppCard(props) {
  const { q_id, q_score, q_title, q_display_name, q_body, q_answer_count } = props;
  const [viewClickedQuestion, setViewClickedQuestion] = useState(false);
  // const [ClickedQuestion, setClickedQuestion] = useState(false);
  const [res, setResult] = useState(null);
  const { width } = useWindowDimensions(); //problematic 
  
  
  
  return (
    
    <Card>

     <Card.Title style={{color:"#3295a8"}} onPress={()=>props.getAnswers()}>{q_title}</Card.Title>
      <Text>Asked By: {q_display_name}</Text>
      <Text>Score: {q_score}</Text>
      <Text>Total Answers: {q_answer_count}</Text>
      
      {viewClickedQuestion && (
        <RenderHtml
        // contentWidth={width}
        source={{html:q_body}}
        
      />
      )}
      <Button
        title='View Question Body'
        onPress={() => setViewClickedQuestion(!viewClickedQuestion)}
      ></Button>
    </Card>
   
  );
}
