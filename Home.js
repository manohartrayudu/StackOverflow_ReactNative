import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AppCard from './Card';

export default function Home(props) {
  const [text, setText] = useState('');
  const [res, setResult] = useState(null);

  const getRes = async () => {
    const fetchres = await fetch(
      `https://api.stackexchange.com/2.3/search?site=stackoverflow&order=desc&sort=activity&intitle=${text}&filter=withbody&pagesize=20`
    );
    const jsonres = await fetchres.json();

    setResult(jsonres);
  };

  

  return (
    <View style={styles.container}>
      <View style={{flex:0.25}}></View>
      <View style={{width:"50%",flex:0.25}}>
      <SearchBar
 
        placeholder='Enter Query'
        value={text}
        onChangeText={newtext => {
          setText(newtext);
          // debouncedFunction();
          // console.log(debouncedFunction)
        }}
        />
        </View>
        <View style={{flex:0.25}}>
      <Button title='Search' onPress={getRes} />
      </View>
      <ScrollView style={styles.scrollView,{flex:4.25}}>
      {res && res.items ? res.items.map((item, id) => {
        return (
          
          <AppCard
            key={item.question_id}
            q_display_name={item.owner.display_name}
            q_score={item.score}
            q_id={item.question_id}
            q_title={item.title}
            q_body={item.body}
            q_answer_count={item.answer_count}
            getAnswers={()=>props.navigation.navigate('Answers',{"q_id":item.question_id,"q_title":item.title})}
          ></AppCard>
          
          
        );
      }): <Text></Text>}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
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
