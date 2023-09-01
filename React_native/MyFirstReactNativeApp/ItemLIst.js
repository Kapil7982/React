import React from "react";

import { View, Text, FlatList } from "react-native";

function ItemList(){

    const data =[
        {id:'1', title:'Item 1'},
        {id:'2', title:'Item 2'},
        {id:'3', title:'Item 3'},
    ];

    const renderItem = ({item}) =>{
return(
        <View>
            <Text>{item.title}</Text>
        </View>
)
    }

    return (

        <View>
            <Text>List of Items:</Text>
            <FlatList
             data={data}
             renderItem={renderItem}
             keyExtractor={(item) => item.id}
             />
        </View>
    )
}


export default ItemList