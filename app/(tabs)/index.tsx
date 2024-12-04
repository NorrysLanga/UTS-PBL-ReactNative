import { Image, StyleSheet, Platform, View, Text, Button, Alert } from 'react-native';


import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import NewsCard from '@/components/NewsCard';
import axios from 'axios';

export default function HomeScreen() {

  const [news, setNews]= useState([]);

  const getNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-11-04&sortBy=publishedAt&apiKey=d5bb56afa53547d893090e00507aaff2"
    );
    return response.data;
  }

  useEffect(()=> {
    getNews().then((data)=> {
      setNews(data.articles);
    });
  },[])

  return (
    <ScrollView
      style={{ 
        backgroundColor: "#fff",
        padding: 16,
      }}
     >
      {
         news.map((item : any) => (
          <NewsCard
          title={item.title}
          imageUrl={item.urlToImage}
          date={item.publishedAt}
          description={item.description}
     />
      ))}
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
