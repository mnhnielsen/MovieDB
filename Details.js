import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { fetchMovie } from "./API/Movies";

export default function Details({ route }) {
    const [movie, setMovie] = useState({});
    const { movieDetails } = route.params.movie;

    const getMovie = async () => {
        setMovie(await fetchMovie(route.params.movie.imdbID));

    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{movie.Title}</Text>
                <Text style={styles.fill}>{movie.Released}</Text>
                <Image
                    style={{
                        width: '95%',
                        height: 250,
                        margin: 10,
                        borderRadius: 10,
                    }}
                    resizeMode="cover"
                    source={{ uri: movie.Poster }}
                />
                <Text style={styles.headlines}>Plot:</Text>
                <Text style={styles.fill}>{movie.Plot}</Text>
                <Text style={styles.headlines}>Awards:</Text>
                <Text style={styles.fill}>{movie.Awards}</Text>
                <Text style={styles.headlines}>Director:</Text>
                <Text style={styles.fill}>{movie.Director}</Text>
                <Text style={styles.headlines}>Actors:</Text>
                <Text style={styles.fill}>{movie.Actors}</Text>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        marginLeft: 5
    },
    headlines: {
        fontSize: 14,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 5,
        fontWeight: "bold"
    },
    fill: {
        marginLeft: 5
    }
});