/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const [text, setText] = useState('');

  const searchFunction = async () => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?t=${text}&apikey=4235db46`,
      );
      let json = await response.json();
      navigation.navigate('Detail', {data: json});
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logoac.png')} />
      <Text style={styles.head}>Welcome!</Text>

        <Text style={styles.textt}>Search for a movie or webseries to get info about it!</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Type here!"
          onChangeText={(txt) => setText(txt)}
          defaultValue={text}
        />

          <TouchableOpacity style={styles.button} onPress={searchFunction}>
            <Text style={styles.srchbtn}>Search</Text>
          </TouchableOpacity>

      <View>
        <Text style={styles.small}>By: Kushagra Wadhwa</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    alignContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#025083',
    padding: 20,
    borderRadius: 15,
    textTransform: 'lowercase',
    color: '#f7f7f7',
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
    marginTop: 20,
    borderRadius: 100,
  },
  searchBar: {
    margin: 10,
    height: 40,
    width: '90%',
    borderColor: 'white',
    borderRadius: 15,
    paddingVertical: 2,
    padding: 5,
    borderWidth: 2,
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
  textt: {
    color: '#ffffff',
    fontSize: 18,
    width: '70%',
    fontWeight: '600',
    paddingVertical: 20,
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    paddingVertical: 50,
    textTransform: 'uppercase',
  },
  srchbtn: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  small: {
    fontSize: 12,
    color: 'white',
    justifyContent: 'space-evenly',
    marginTop: 100,
  },
  // bottom: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   marginBottom: 40,
  //   marginTop: 0,
  // },
});

export default WelcomeScreen;
