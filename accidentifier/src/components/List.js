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
    
    render() {
        return (
          <View style={styles.container}>
            <FlatList horizontal
            data={data_dummy}
            keyExtractor={(item, index) => index+1}
            renderItem={({item}) => {
                <View key={index}>
                    <Image
                        style={styles.img}
                        source={{uri: item.image}} />
                </View>
            }}
            
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
    },
    img: {
        width: 50,
        height: 50
    },
  })

export default List

// _renderItem(item){
//     return (
//         <View>
//         <Image style={{width: 100, height: 100}} source={{uri: item.image}}/>
//         </View>
//     )
// } 

{/* <uses-sdk
android:minSdkVersion="16"
android:targetSdkVersion="22" /> */}