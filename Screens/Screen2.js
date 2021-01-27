/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import { AccordionList } from "accordion-collapse-react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


const DetailScreen = ({ navigation, route }) => {

    const information = {
        list: [
            {
                id: 1,
                title: 'Cast',
                body: `${route.params.data.Actors}`,
            },
            {
                id: 2,
                title: 'Crew',
                body: `Writer: ${route.params.data.Writer}, Director: ${route.params.data.Director}, Production: ${route.params.data.Production}`,
            },
            {
                id: 3,
                title: 'Box-office & Awards',
                body: `${route.params.data.Awards}, Box-Office: ${route.params.BoxOffice === undefined ? 'N/A' : route.params.BoxOffice} `,
            },
            {
                id: 4,
                title: 'More',
                body: `Language: ${route.params.data.Language}, Country: ${route.params.data.Country}`,
            },

        ],
    };
    const head = (item) => {
        return (
            <View style={styles.head}>
                <Text style={styles.headTitle}>{item.title}</Text>
            </View>
        );
    };

    const body = (item) => {
        return (
            <View style={styles.body}>
                <Text style={styles.bodyy}>{item.body}</Text>
            </View>
        );
    };

    const another = async() => {
        navigation.navigate("Welcome");
    };

    if (route.params.data.Title){
        return (
            <View style={styles.container} >
                <Image source={{ uri: route.params.data.Poster }}
                    style={styles.poster} />

                <View style={styles.info}>
                    <Text style={styles.title}>{route.params.data.Title}</Text>
                    <Text style={styles.font}>{route.params.data.Year}</Text>
                    <Text style={styles.font}>Type: {route.params.data.Type}</Text>
                    <Text style={styles.font}>IMDb Ratings: {route.params.data.imdbRating}</Text>
                    <Text style={styles.font}>RunTime: {route.params.data.Runtime}</Text>

                </View>
                <View>
                    <Text style={styles.plot}>{route.params.data.Plot}</Text>
                </View>
                <AccordionList
                    list={information.list}
                    header={head}
                    body={body}

                    style={styles.list}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>NOT FOUND!{"\n"}</Text>
                <Text style={styles.plot}>Please type the correct name!</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#225794",
    },
    font: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
    },
    body: {
        padding: 20,
    },
    bodyy: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    head:{
        marginTop: 7,
    },
    headTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // backgroundColor: '#207398',
        backgroundColor: "#225794",
        paddingHorizontal: 10,
        paddingVertical: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        marginTop: 10,
        width: '100%',
        // flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plot: {
        marginTop: 5,
        fontSize: 15,
        color: 'white',
        paddingHorizontal: 20,
        fontStyle: 'italic',
    },
    poster: {
        width: "90%",
        // width: 400,
        height: 400,
        borderRadius: 100,
        marginTop: 30,
        padding: 0,
        paddingVertical: 10,
    },
    list: {
        marginTop: 10,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 20,
        // backgroundColor: '#03203C',
        backgroundColor: '#000000',
    },
});

export default DetailScreen;
