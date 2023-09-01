import React, {useState, useEffect} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const API_URL ='https://jsonplaceholder.typicode.com/posts';

function AuthApi(){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const isAuthenticated = false;
        const mockAuthToken = 'moneyisfake';

        if(!isAuthenticated)
        {
            return;
        }

        const headers = {

            Authorization:`Bearer ${mockAuthToken}`
        };


        axios
        .get(API_URL, {headers})
        .then((response) =>{
            setData(response.data);
            setLoading(false);
        })
        .catch((error)=> console.error(error));
    },[]);

    if(loading)
    {
        return <ActivityIndicator size="large"/>;
    }

    return (

        <View>
            <Text>Data from Secure API: </Text>
            {data.map((item) =>(
                <Text key={item.id}>{item.title}</Text>
            ))}
        </View>
    )
}

export default AuthApi;
