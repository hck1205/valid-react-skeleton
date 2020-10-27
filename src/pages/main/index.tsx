import React from 'react';

import { Header, Footer, GlobalTemplate } from '@/components';

import Component from './component';

const Main = () => (
    <GlobalTemplate header={<Header />} footer={<Footer />}>
        <Component />
    </GlobalTemplate>
);

export default Main;
