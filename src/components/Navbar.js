import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class MyNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand href="/" style={{ opacity: .3 }}>slrapp</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/zulkamaula.github.io">About</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}