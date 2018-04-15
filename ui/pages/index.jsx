import React from 'react'; 
import {ClientRoute} from 'reshow'; 
import Home from './Home';
import Login from './Login';
import Register from './Register';
import realworldStore from '../../src/stores/realworldStore';

const themes = {
    Home,
    login: Login,
    register: Register
};

const Index = props => 
<ClientRoute
    themes={themes}
    {...props}
/>

Index.defaultProps = {defaultThemePath: 'Home'};

export default Index;
