import React from 'react';
import RealWorldUI from '../molecules/RealWorldUI';

const Container = ({children, ...props}) =>
<RealWorldUI {...props}>
    <RealWorldUI className="container">
    {children}
    </RealWorldUI>
</RealWorldUI>

export default Container;
