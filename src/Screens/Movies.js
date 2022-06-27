import React from 'react'
import { View } from 'react-native'
import { HomeButton } from '../Components/SimpleComponents'

function Movies({ navigation }) {
    return (
        <>
            <View style={{ padding: 40 }}>
                <HomeButton
                    title="Top Rated Movies"
                    onPress={() =>
                        navigation.navigate('Top Rated Movies')
                    }
                />
                <HomeButton
                    title="Upcoming Movies"
                    onPress={() =>
                        navigation.navigate('Upcoming Movies')
                    }
                />
            </View>
        </>
    )
}

export default Movies
