import React,{Fragment} from 'react';
import PageHeader from '../organisms/PageHeader';
import PageFooter from '../organisms/PageFooter';

const OneColumn = ({body, ...props}) =>
<Fragment>
    <PageHeader />
    {body}
    <PageFooter />
</Fragment>

export default OneColumn;
