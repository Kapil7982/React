import React, {useState, useEffect} from "react";

import { View, Text, ActivityIndicator } from "react-native";

function ApiData(){

    const [data, setData ] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) =>{
            setData(json);
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
            <Text>Data from Api: </Text>
            {data.map((item)=>(
                <Text key={item.id}> Title: {item.title}</Text>
            ))}
        </View>
    )
}

export default ApiData;