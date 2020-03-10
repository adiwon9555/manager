import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './auth/Login';
import EmployeeCreate from './employee/EmployeeCreate';
import EmployeeList from './employee/EmployeeList';

export default RouterComponent = () => {

    const { navStyle, rightButtonNavStyle } = style;
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth' >
                    <Scene  key='login' sty component={Login} title={'Please Login'} ></Scene>
                </Scene>
                <Scene key='main' initial>
                    <Scene key='employeeList'  component={EmployeeList} title={'Employees'} renderRightButton={renderRightButton}  initial ></Scene>
                    <Scene key='employeeCreate' component={EmployeeCreate}  title={'Create Employee'}></Scene>
                </Scene>
            </Scene>
        </Router >
    );
}
const renderRightButton = () => {
    const { rightButtonNavStyle, rightTextStyle } = style;
    return (
        <TouchableOpacity style={rightButtonNavStyle} onPress={() => Actions.employeeCreate()} >
            <Text style={rightTextStyle}>Add</Text>
        </TouchableOpacity>
    );
};

const style = {
    navStyle: {
        flex: 1,
        textAlign: 'center',

    },
    rightButtonNavStyle: {
        paddingRight: 10,

    },
    rightTextStyle: {
        fontSize: 20
    }
}