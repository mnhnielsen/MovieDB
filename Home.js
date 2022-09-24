import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fetchMovies } from "./API/Movies";
import { TextInput } from "react-native-paper";
import MovieCard from "./MovieCard.js";
import { StatusBar } from "react-native";
import { FlatList } from "react-native";


export default function Home({navigation}) {
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState(['star wars']);

    const getMovies = async () => {
        setMovies(await fetchMovies(searchMovies));
        setSearchMovies("");
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
          {Object.keys(movies).length > 0 && (
            <View>
              <StatusBar barStyle="dark-content" />
              <TextInput placeholder="Search" value={searchMovies} onChangeText={(text) => setSearchMovies(text)} left={<TextInput.Icon name="magnify" />} onSubmitEditing={getMovies}/>
              <ScrollView>
                {movies.Search.map((movie, i) => (
                  <MovieCard movie={movie} key={i} navigation={navigation} />

                ))}
                
              </ScrollView>
            </View>
          )}
        </>
      );
    }