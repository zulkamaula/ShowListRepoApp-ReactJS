import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ListRepos from './ListRepo'

export default class Contain extends Component {

    render() {

        const explainTitle = {
            fontSize: '.8vmax',
            fontStyle: 'italic',
            fontWeight: 'lighter'
        }

        return (
            <Container className="bg-light p-5" fluid>
                <h1 className="display-5" style={{ color: 'rgba(104, 165, 222, .8)', textShadow: "0px 1px 2px rgba(109, 109, 110, .7)" }}>
                    SLRAPP
                    <span className="d-block fst-talic" style={explainTitle}>Show List Repo App - ReactJS</span>
                </h1>

                <div className="row justify-content-center align-items-start mt-5">
                    <ListRepos />
                </div>
            </Container>
        )
    }
}