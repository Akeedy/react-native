import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style';
function SongCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}}></Image>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>

        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>

        {/* {
          props.song.isSoldOut && (
          <View style={styles.sold_out_container}>
            <Text style={styles.sold_out_title}>SOLD OUT</Text>
          </View>
          )
        } */}

          <View style={styles.sold_out_container}>
            <Text style={styles.sold_out_title}>SOLD OUT</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SongCard;
