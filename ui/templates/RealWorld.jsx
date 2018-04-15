import React,{Fragment} from 'react';
import OneColumn from '../templates/OneColumn';

const RealWorld = ({tpl, ...props}) =>
{
    switch(tpl)
    {
        default:
           return <OneColumn {...props}/>
    }
}

export default RealWorld;
