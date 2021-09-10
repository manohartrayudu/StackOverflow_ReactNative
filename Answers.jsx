import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import {Card} from 'react-native-elements';
import AnswerCard from './AnswerCard';

export default function Answers(props)  {
    const [res, setResult] = useState(null);
    useEffect(()=>{
        getAnswersApi();
    },[getAnswersApi])
    const getAnswersApi = async ()=>{
        const fetchres = await fetch(
          `https://api.stackexchange.com/2.3/questions/${props.route.params.q_id}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&pagesize=10`
        );
        const jsonres = await fetchres.json();
    
        setResult(jsonres);
        // setClickedQuestion(true);
      }

      return res==null || res.items==null ? <View><Card><Text style={{fontWeight: "bold",color:"#3295a8"}}>{ "Q: " + props.route.params.q_title}</Text></Card></View>  : 
      <ScrollView style={styles.scrollView,{flex:4.25}}>
        <Card><Text style={{fontWeight: "bold",color:"#3295a8"}}>{ "Q: " + props.route.params.q_title}</Text></Card>
      {res && res.items ? res.items.map((item, id) => {
        return (
          
          <AnswerCard
            key={item.amswer_id}
            a_display_name={item.owner.display_name}
            a_score={item.score}
            a_id={item.answer_id}
            a_body={item.body}
          ></AnswerCard>
          
          
        );
      }): <Text></Text>}
      </ScrollView>     
      
}

const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      marginHorizontal: 20,
    },
  });