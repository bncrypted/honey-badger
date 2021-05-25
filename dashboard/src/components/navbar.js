import BSNavbar from 'react-bootstrap/Navbar';
import BSNav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (    
        <BSNavbar bg="light" expand="lg">
            <BSNavbar.Brand href="/">Honey Badger</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
                <BSNav className="mr-auto">
                    <BSNav.Link href="/heatmap">Heatmap</BSNav.Link>
                </BSNav>
            </BSNavbar.Collapse>
        </BSNavbar>
    );
};

export default Navbar;
