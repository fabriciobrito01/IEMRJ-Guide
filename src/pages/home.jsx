import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Begin from '../components/begin.jsx';
import Mapa from '../components/mapa.jsx';
import Programacao from '../components/programacao.jsx';
import Hospedagem from '../components/hospedagem.jsx';
import Times from '../components/times.jsx';


function Index() {

    return (
        <>
            <Programacao />
            <Header />
            <Footer />
            <Mapa />
            <Hospedagem />
            <Times />
            <Begin />

            {/*<Footer />*/}

        </>
    );

}

export default Home;