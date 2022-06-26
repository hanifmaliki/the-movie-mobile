import React from 'react'
import { Text, TouchableOpacity, Alert } from 'react-native';
import { ChevronLeftIcon, ChevronRightIcon } from 'native-base';
import { Card } from 'react-native-paper';

function Pagination({ page, setPage, totalPages }) {
    const mentokBos = () => {
        Alert.alert(
            "Sudah mentok!",
            "Jangan pencet lagi"
        )
    }

    return (
        <Card style={{ marginBottom: 8 }}>
            <Card.Content style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => page > 1 ? setPage(page - 1) : mentokBos()}>
                    <ChevronLeftIcon />
                </TouchableOpacity>
                <Text>Page {page} from {totalPages}</Text>
                <TouchableOpacity onPress={() => page < totalPages ? setPage(page + 1) : mentokBos()}>
                    <ChevronRightIcon />
                </TouchableOpacity>
            </Card.Content>
        </Card>
    )
}

export default Pagination
