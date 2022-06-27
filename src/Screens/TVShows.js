import React from 'react'
import { View } from 'react-native'
import { HomeButton } from '../Components/SimpleComponents'

function TVShows({ navigation }) {
    return (
        <>
            <View style={{ padding: 40 }}>
                <HomeButton
                    title="Top Rated TV Shows"
                    onPress={() =>
                        navigation.navigate('Top Rated TV Shows')
                    }
                />
                <HomeButton
                    title="Popular TV Shows"
                    onPress={() =>
                        navigation.navigate('Popular TV Shows')
                    }
                />
            </View>
        </>
    )
}

export default TVShows
