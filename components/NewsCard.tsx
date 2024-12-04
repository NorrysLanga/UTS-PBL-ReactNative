import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'




interface NewsCardProps {
 title: string;
 description: string;
 imageUrl: string;
 date: string;
}


const NewsCard: FC<NewsCardProps> = ({ title, description, imageUrl, date }) => {
 return (
   <TouchableOpacity style={styles.card}>
     <Image
       source={{ uri: imageUrl }}
       style={styles.cardImage}
     />
     <View style={styles.cardContent}>
       <Text style={styles.cardTitle}>{title}</Text>
       <Text style={styles.cardDescription}>{description}</Text>
       <Text style={styles.cardDate}>{date}</Text>
     </View>
   </TouchableOpacity>
 )
}


const styles = StyleSheet.create({
 card: {
   backgroundColor: 'white',
   borderRadius: 8,
   marginBottom: 16,
   elevation: 5,
 },
 cardImage: {
   width: '100%',
   height: 200,
   borderTopLeftRadius: 8,
   borderTopRightRadius: 8,
 },
 cardContent: {
   padding: 16,
 },
 cardTitle: {
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 8,
 },
 cardDescription: {
   fontSize: 14,
   color: '#666',
   marginBottom: 8,
 },
 cardDate: {
   fontSize: 12,
   color: '#999',
 },
});


export default NewsCard