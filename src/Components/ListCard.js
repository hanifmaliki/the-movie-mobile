import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';

function ListCard({ title, desc, image }) {
    return (
        <Card style={{ marginBottom: 8 }}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w710_and_h400_multi_faces' + image }} />
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph numberOfLines={2}>{desc}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default ListCard
