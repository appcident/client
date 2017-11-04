import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

const data_dummy = [
    {
        key: 1,
        title: 'Title 1',
        image: 'https://dummyimage.com/300',
        content: 'content 1'
    },
    {
        key: 2,
        title: 'Title 2',
        image: 'https://d3lwq5rlu14cro.cloudfront.net/v1/fuwogMIHAFcdCrC2D4cT.png',
        content: 'content 2'
    },
    {
        key: 3,
        title: 'Title 3',
        image: 'https://dummyimage.com/300',
        content: 'content 3'
    },
    {
        key: 4,
        title: 'Title 4',
        image: 'https://d3lwq5rlu14cro.cloudfront.net/v1/fuwogMIHAFcdCrC2D4cT.png',
        content: 'content 4'
    }
]


class List extends Component {
    _renderItem(item){
        return (
            <View>
            <Image style={{width: 100, height: 100}} source={{uri: item.image}}/>
            </View>
        )
    } 
    render() {
        return (
          <View style={styles.container}>
              {/* <Text>List Accidents</Text> */}
              <FlatList
                horizontal
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
        // backgroundColor: 'red',
        position: 'absolute', 
        bottom: 58, 
        // paddingBottom: 8, 
        alignItems: 'center'
    }
  });

export default List