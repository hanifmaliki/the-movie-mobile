import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopRatedMovies from './src/Screens/TopRatedMovies';
import UpcomingMovies from './src/Screens/UpcomingMovies';
import TopRatedTVShows from './src/Screens/TopRatedTVShows';
import PopularTVShows from './src/Screens/PopularTVShows';
import Home from './src/Screens/Home';
import { NativeBaseProvider } from 'native-base';
import MyContext from './src/Context/MyContext';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  const [dataPopShows, setDataPopShows] = useState({})
  const [pagePopShows, setPagePopShows] = useState(1)
  const [dataTopShows, setDataTopShows] = useState({})
  const [pageTopShows, setPageTopShows] = useState(1)
  const [dataTopMovies, setDataTopMovies] = useState({})
  const [pageTopMovies, setPageTopMovies] = useState(1)
  const [dataUpMovies, setDataUpMovies] = useState({})
  const [pageUpMovies, setPageUpMovies] = useState(1)

  return (
    <MyContext.Provider value={{
      dataPopShows, setDataPopShows, pagePopShows, setPagePopShows,
      dataTopShows, setDataTopShows, pageTopShows, setPageTopShows,
      dataTopMovies, setDataTopMovies, pageTopMovies, setPageTopMovies,
      dataUpMovies, setDataUpMovies, pageUpMovies, setPageUpMovies
    }}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Top Rated Movies2" component={TopRatedMovies} />
          </Drawer.Navigator> */}
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'The Movie' }}
            />
            <Stack.Screen name="Top Rated Movies" component={TopRatedMovies} />
            <Stack.Screen name="Upcoming Movies" component={UpcomingMovies} />
            <Stack.Screen name="Top Rated TV Shows" component={TopRatedTVShows} />
            <Stack.Screen name="Popular TV Shows" component={PopularTVShows} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </MyContext.Provider>
  );
}