import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', MySwal.stopTimer)
        toast.addEventListener('mouseleave', MySwal.resumeTimer)
    }
})

export const GET_LIST_REPOS = "GET_LIST_REPOS"
export const FIND_LIST_REPOS = "FIND_LIST_REPOS"

export const getListRepos = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_LIST_REPOS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: 'GET',
            url: 'https://api.github.com/users/zulkamaula/repos',
            timeout: 120000
        }).then((res) => {
            // console.log('res dapet 2 => ', res.data)
            dispatch({
                type: GET_LIST_REPOS,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            dispatch({
                type: GET_LIST_REPOS,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}

export const findListRepos = (data) => {
    return (dispatch) => {
        console.log('findListRepos ==> ', data)
        // loading
        dispatch({
            type: FIND_LIST_REPOS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })


        // get API
        axios({
            method: 'GET',
            url: `https://api.github.com/users/${data.user}/repos`,
            timeout: 120000
        }).then((res) => {
            console.log('res dapet find => ', res.data)
            if (res.data.length > 0) {
                Toast.fire({
                    icon: 'success',
                    title: 'Wait please!',
                }).then(() => {
                    dispatch({
                        type: FIND_LIST_REPOS,
                        payload: {
                            loading: false,
                            data: res.data,
                            errorMessage: false
                        }
                    })
                });

            } else {

                Toast.fire({
                    icon: 'error',
                    title: 'Oopss!',
                    text: 'Data Undefined..'
                })

                dispatch({
                    type: FIND_LIST_REPOS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: false
                    }
                })
            }
        }).catch((err) => {
            dispatch({
                type: FIND_LIST_REPOS,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}