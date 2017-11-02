import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native'

const data_dummy = [
    {
        key: 1,
        title: 'Title 11111111111111111',
        content: 'content 1'
    },
    {
        key: 2,
        title: 'Title 2222222222222222',
        content: 'content 2'
    },
    {
        key: 3,
        title: 'Title 3333333333333333',
        content: 'content 3'
    },
    {
        key: 4,
        title: 'Title 4444444444444444',
        content: 'content 4'
    }
]


class List extends Component {
    _renderItem(item){
        return (
            <Text>{item.title}</Text>
        )
    } 

    render() {
        return (
          <View style={styles.container}>
              <Text>List Accidents</Text>
              <FlatList
                /* horizontal */
                renderItem={({item}) => this._renderItem(item)}
                data={data_dummy}
              />
          </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'red',
        position: 'absolute', 
        bottom: 72, 
        paddingBottom: 8, 
        alignItems: 'center'
    }
  });

export default List