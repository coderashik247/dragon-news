import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;