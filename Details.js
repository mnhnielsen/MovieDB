import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
        <View>
            <Text style={styles.title}>{movie.Title}</Text>
            <Image
                style={{
                    width: '100%',
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                }}
                resizeMode="cover"
                source={{ uri: movie.Poster }}
            />
            <Text style={styles.plot}>Plot:</Text>
            <Text>{movie.Plot}</Text>
        </View>
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
    },
    image: {
        width: "100%",
        height: "300px",
    },
    plot: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight:"bold"
    }
});