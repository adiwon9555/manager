import React, { Component } from 'react';
import { Text, Picker, View } from 'react-native';
import { Card, CardItem, Input, Button } from '../commons';


export default class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label={'Name'}
                        placeholder={'John Doe'}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        label={'Phone'}
                        placeholder={'98XXXXXXXX'}
                    />
                </CardItem>
                <CardItem style={{alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 18,
                        paddingLeft: 20,
                        flex: 1
                    }}>Shift</Text>
                    <Picker
                        selectedValue={''}
                        style={{ flex: 2 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                    </Picker>
                </CardItem>
                <CardItem>
                    <Button>
                        Save
                    </Button>
                </CardItem>
                <CardItem>
                    <Button>
                        Text Schedule
                    </Button>
                </CardItem>
                <CardItem>
                    <Button>
                        Fire
                    </Button>
                </CardItem>
            </Card>
        );
    }
}