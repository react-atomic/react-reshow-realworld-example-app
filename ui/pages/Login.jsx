import React, {PureComponent} from 'react'; 

import RealWorld from '../templates/RealWorld';

class Body extends PureComponent
{
    render()
    {
        return (<div>i am login</div>);
    }
}

const Login = props =>
<RealWorld body={<Body />} />

export default Login;
