import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findListRepos, getListRepos } from '../../actions/RepoAction'

function FindRepo() {

    const [user, setUser] = useState('');
    const { findListRepoResult } = useSelector((state) => state.RepoReducer);
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(findListRepos({ user: user }))
    }

    useEffect(() => {

        if (findListRepoResult) {
            dispatch(getListRepos())
            setUser('');
        }

    }, [findListRepoResult, dispatch])

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Typing here.." value={user} onChange={(event) => setUser(event.target.value)} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-success">
                            Check
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FindRepo
