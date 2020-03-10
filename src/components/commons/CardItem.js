import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
    const { cardItemView } = styles;
    return (
        <View style={[cardItemView,props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    cardItemView: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};

export { CardItem };
