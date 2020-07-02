import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <div className="body">
            <style jsx>{`
                .body {
                    width: 100vw;
                    height: 100vh;
                    background-image: url('/static/got-plants-tonight-desktop.jpg');
                    background-size: cover;
                    background-color: '#c9e0a6';
                }
            `}</style>
            <Head>
                <title>Got Plants Tonight?</title>
                <link 
                rel="stylesheet"
                href="https://bootswatch.com/4/minty/bootstrap.min.css"
                />
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;