import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/HomePage/Landing';
import Head from 'next/head';
import Link from 'next/link';

const Page = ()=>{

}
function HomePage(){
    return (
        <>
            <Head>
                <Link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <LandingPage />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;