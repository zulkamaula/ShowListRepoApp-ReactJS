import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findListRepos, getListRepos } from '../../actions/RepoAction'
import FindRepos from '../FindRepo'


function ListRepo() {
    const { getListRepoResult, getListRepoLoading, getListRepoError, findListRepoResult } = useSelector((state) => state.RepoReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        // Call action getListRepo
        console.log('findListRepoResult => ', findListRepoResult)
        if (findListRepoResult) {
            dispatch(findListRepos())
        } else {
            dispatch(getListRepos());
        }

    }, [findListRepoResult, dispatch])

    const visitRepo = url => {
        window.open(url, '_blank')
    }

    const textInfo = {
        fontWeight: '600',
        fontStyle: 'italic',
    }

    const textName = {
        fontWeight: 'bolder',
        color: 'rgba(104, 165, 222, .8)',
        textShadow: "0px 0px 1px rgba(109, 109, 110, .9)"
    }

    return (
        <div className='col-12'>
            <div className="row mb-3 justify-content-center pb-3">
                <div className="col-3 text-left">
                    {
                        getListRepoResult ? (
                            // <span> {getListRepoResult[0].owner.login} </span>

                            <img src={getListRepoResult[0].owner.avatar_url} className="shadow-sm" style={{ borderRadius: '50%', width: '10vmax' }} alt={getListRepoResult[0].owner.login} />
                        ) : getListRepoLoading ? (
                            <p>Loading ...</p>
                        ) : (
                            <p> {getListRepoError ? getListRepoError : ' Data Empty! '} </p>
                        )}
                </div>
                <div className="col-6 border p-3 rounded-lg shadow-sm">
                    <p className="lead">Please enter username below!</p>
                    <div className="row">
                        <div className="col">
                            <FindRepos />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-9">
                    {getListRepoResult ? (
                        getListRepoResult.map((repo) => {
                            return (
                                <div className="row p-3 shadow-sm rounded mb-0" key={repo.id}>
                                    <div className='col-10 text-left'>
                                        <h5 style={textName}>
                                            {repo.name}
                                        </h5>
                                        {/* <hr /> */}
                                        <div className='row'>
                                            <div className='col' style={{ opacity: '.7', fontSize: '.9vmax' }}>
                                                Size:&nbsp;
                                                <span style={textInfo}>
                                                    {repo.size}
                                                </span> |
                                                Language:&nbsp;
                                                <span style={textInfo}>
                                                    {repo.language}
                                                </span> |
                                                Last Updated:&nbsp;
                                                <span style={textInfo}>
                                                    {repo.updated_at.substr(0, 10)}
                                                </span>

                                            </div>
                                        </div>

                                    </div>
                                    <div className='col align-self-center' style={{ cursor: 'pointer' }} onClick={visitRepo(repo.url)}>
                                        <div style={{ fontSize: '2vmax' }}>
                                            ➦
                                        </div>
                                        <div style={{ fontSize: '.7vmax', lineHeight: '0px' }}>
                                            Visit this repo
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : getListRepoLoading ? (
                        <p>Loading ...</p>
                    ) : (
                        <p> {getListRepoError ? getListRepoError : ' Data Empty! '} </p>
                    )}
                </div>
            </div>
        </div >
    )
}

export default ListRepo
