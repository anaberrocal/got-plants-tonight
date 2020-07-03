import React,  { Component } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

export default class extends Component {
    static async getInitialProps() {
        const res = await fetch("https://v0.trefle.io/api/plants/token=QnN1ZktEU1ZyQ2NKNWRmbEwxNnNpQT09");
        const data = await res.json();

        return {
            name: data. common_name,
            image: data.images,
        }
    }


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
                    text-shadow: 0 1px 0 #ccc, 
                    0 2px 0 #c9c9c9,
                    0 3px 0 #bbb,
                    0 4px 0 #b9b9b9,
                    0 5px 0 #aaa,
                    0 6px 1px rgba(0,0,0,.1),
                    0 0 5px rgba(0,0,0,.1),
                    0 1px 3px rgba(0,0,0,.3),
                    0 3px 5px rgba(0,0,0,.2),
                    0 5px 10px rgba(0,0,0,.25),
                    0 10px 10px rgba(0,0,0,.2),
                    0 20px 20px rgba(0,0,0,.15);
                    line-height: 0.95em;
                }
            `} 
            </style>
            </div>
        </Layout>
        )
    }
}