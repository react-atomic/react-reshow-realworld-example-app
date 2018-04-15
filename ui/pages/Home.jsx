import React, {PureComponent} from 'react'; 

import RealWorld from '../templates/RealWorld';

class Body extends PureComponent
{
    render()
    {
        return (<div>Home</div>);
    }
}

const Home = props =>
<RealWorld body={<Body />} />

export default Home;
