import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <div>
            <Container className="bg-secondary p-4" fluid>
                <div className="row ">
                    <div className="col text-light" style={{ fontSize: '1vmax', opacity: .8 }}>
                        Copyright © 2022 by Zulkariski | All Right Reserved
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer