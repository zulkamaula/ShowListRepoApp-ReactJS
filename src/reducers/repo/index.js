import { GET_LIST_REPOS, FIND_LIST_REPOS } from '../../actions/RepoAction'
const intialState = {
    getListRepoResult: false,
    getListRepoLoading: false,
    getListRepoError: false,

    findListRepoResult: false,
    findListRepoLoading: false,
    findListRepoError: false,

}

const repo = (state = intialState, action) => {
    switch (action.type) {
        case GET_LIST_REPOS:
            return {
                ...state,
                getListRepoResult: action.payload.data,
                getListRepoLoading: action.payload.loading,
                getListRepoError: action.payload.error,
            }

        case FIND_LIST_REPOS:
            console.log('masuk Find User ', action)
            return {
                ...state,
                getListRepoResult: action.payload.data,
                getListRepoLoading: action.payload.loading,
                getListRepoError: action.payload.error,
            }

        default:
            return state;
    }
}

export default repo