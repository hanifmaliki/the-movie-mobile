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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './src/Screens/Movies';
import TVShows from './src/Screens/TVShows';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ title: "Home" }} name="Home Screen" component={Home} />
    </HomeStack.Navigator>
  );
}

const MoviesStack = createNativeStackNavigator();

function MoviesStackScreen() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen options={{ title: "Movies" }} name="Movies Screen" component={Movies} />
      <MoviesStack.Screen name="Top Rated Movies" component={TopRatedMovies} />
      <MoviesStack.Screen name="Upcoming Movies" component={UpcomingMovies} />
    </MoviesStack.Navigator>
  );
}

const TVShowsStack = createNativeStackNavigator();

function TVShowsStackScreen() {
  return (
    <TVShowsStack.Navigator>
      <TVShowsStack.Screen options={{ title: "TV Shows" }} name="TV Shows Screen" component={TVShows} />
      <TVShowsStack.Screen name="Top Rated TV Shows" component={TopRatedTVShows} />
      <TVShowsStack.Screen name="Popular TV Shows" component={PopularTVShows} />
    </TVShowsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

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
          <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Movies" component={MoviesStackScreen} />
            <Tab.Screen name="TV Show" component={TVShowsStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </MyContext.Provider>
  );
}