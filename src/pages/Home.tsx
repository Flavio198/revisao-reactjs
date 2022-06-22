// @flow 
import * as React from 'react';
import Header from '../components/header/Header';

interface  HomeProps {
    title: string;
    
};



const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <>
            <Header />
        </>
    );
};

export default Home;