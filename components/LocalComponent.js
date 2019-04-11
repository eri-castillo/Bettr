import React, { Component } from 'React';
import { Text, View } from 'react-native';

class LocalComponent extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hello From the Local Component
                </Text>
            </View>
        )
    }
};

export default LocalComponent;