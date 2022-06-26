import { View, Button } from "react-native";

export const HomeButton = ({ title, onPress }) => {
    return (
        <View style={{ margin: 10 }}>
            <Button
                title={title}
                onPress={onPress}
            />
        </View>
    )
}