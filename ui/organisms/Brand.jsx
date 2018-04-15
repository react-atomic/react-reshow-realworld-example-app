import React from 'react';
import RealWorldUI from '../molecules/RealWorldUI';
import {Section} from 'reshow';

const BrandBody = ({name}) =>
<RealWorldUI atom="a" href="/" className="navbar-brand">
{name}
</RealWorldUI>

const Brand = props =>
<Section name="brand">
    <BrandBody />
</Section>

export default Brand;
