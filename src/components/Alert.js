import React, { Component } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import 'sweetalert2/src/sweetalert2.scss'

const MySwal = withReactContent(Swal)

export default class Alert extends Component {

    clickMe() {
        MySwal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
        });
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-2">
                        tes Alert..
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary" onClick={this.clickMe}>tes tes</button>
                    </div>
                </div>
            </div>
        )
    }


}