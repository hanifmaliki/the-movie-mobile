import React, { useEffect, useContext } from 'react'
import { getTopRated } from '../Axios/TV'
import { ScrollView } from 'native-base';
import { View } from 'react-native';
import ListCard from '../Components/ListCard';
import Loading from '../Components/Loading';
import Pagination from '../Components/Pagination';
import MyContext from '../Context/MyContext';

function TopRatedTVShows() {
    const { dataTopShows: data, setDataTopShows: setData,
        pageTopShows: page, setPageTopShows: setPage } = useContext(MyContext)

    useEffect(() => {
        async function fetchItems() {
            const data = await getTopRated(page)
            data && setData(data)
        }
        fetchItems()
    }, [page])

    return (
        <>
            {
                data?.results ?
                    <ScrollView>
                        <View style={{ paddingTop: 8, paddingLeft: 8, paddingRight: 8 }}>
                            <Pagination
                                page={page}
                                setPage={setPage}
                                totalPages={data.total_pages}
                            />
                            {
                                data.results?.map((el, idx) => {
                                    return (
                                        <ListCard
                                            key={idx}
                                            title={el.name}
                                            desc={el.overview}
                                            image={el.backdrop_path}
                                        />
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    :
                    <Loading />
            }

        </>
    )
}

export default TopRatedTVShows
