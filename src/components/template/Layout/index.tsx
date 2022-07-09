import { ImageContainer, Footer } from './styles'
import Navbar from "../Navbar";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <ImageContainer>
                <img src="/img/logo.png" alt="Flipon" width={'100%'} height={'100%'} />
            </ImageContainer>

            {children}

            <Footer>
                <h4>Powered by Retornei.com</h4>
            </Footer>
        </>
    )
}

Layout.displayName = "Layout";

export default Layout;

