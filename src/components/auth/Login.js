import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { Card, CardItem, Input, Button, Spinner } from './../commons';
import * as actions from '../../actions';
import firebase from 'firebase';


class Login extends Component {

    render() {
        const { loginContainer, errorText } = style;
        const { email, password, emailChange, passwordChange, showSpinner, errorMessage, onLogin } = this.props;
        return (
            <View style={loginContainer}>
                <Card>
                    <CardItem>
                        <Input
                            label='Email'
                            placeholder='abc@xxx.com'
                            value={email}
                            onChangeText={emailChange}
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            label='Password'
                            placeholder='password'
                            secureTextEntry
                            value={password}
                            onChangeText={passwordChange}
                        />
                    </CardItem>
                    {!!errorMessage && <Text style={errorText}>{errorMessage}</Text>}
                    <CardItem>
                        {showSpinner
                            ?
                            <Spinner />
                            :
                            < Button onPress={() => { onLogin({ email, password }) }}>Login</Button>
                        }

                    </CardItem>
                </Card>
            </View >
        );
    }
}

const style = {
    loginContainer: {
        marginTop: 120,
        // marginLeft: 30,
        // marginRight: 30
    },
    errorText: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'red'
    }
};

mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        showSpinner: state.auth.showSpinner,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, actions)(Login);
