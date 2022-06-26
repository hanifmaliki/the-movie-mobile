import React from 'react'
import { View } from 'react-native'
import { HomeButton } from '../Components/SimpleComponents'

function Home({ navigation }) {
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

export default Home
