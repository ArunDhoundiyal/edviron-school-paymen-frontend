import Header from '../Header'
import {BgContainer} from './styledComponents' 
import AllTransaction from '../AllTransaction';

const Home = () =>{
    console.log('Home');
    return(
        <BgContainer>
            <Header/>
            <AllTransaction/>
        </BgContainer>

    )
}

export default Home