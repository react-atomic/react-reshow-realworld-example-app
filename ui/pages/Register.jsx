import React, {PureComponent} from 'react'; 

import RealWorld from '../templates/RealWorld';

class Body extends PureComponent
{
    render()
    {
        return (<div>i am register</div>);
    }
}

const Register = props =>
<RealWorld body={<Body />} />

export default Register;
