// import { getFruits } from '../apis/fruits'

export const SET_USER= 'SET_USER'

export function setUser (user) {
    return {
        type: SET_USER,
        user
    }
}

// export function fetchUser () {
//     return dispatch => {
//         return getFruits()
//         .then(fruits => {
//             dispatch(setFruits(fruits))
//             return null
//         })
//     }
// }