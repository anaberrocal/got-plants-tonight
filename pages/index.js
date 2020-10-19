import React,  { Component } from 'react';
import Layout from '../components/Layout';

export default class extends Component {
    render () {
        return (
            <Layout>
            <div>
                <h1 className="heading">hey, got plants tonight?</h1>
            <style jsx>
                {`
                .heading {
                    color: white;
                    font-family: 'Ubuntu', sans-serif;
                    letter-spacing: -24px;
                    font-size: 325px;
                    font-weight: bold;
                    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
                    line-height: 0.95em;
                }
            `} 
            </style>
            </div>
        </Layout>
        )
    }
}