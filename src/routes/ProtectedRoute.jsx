import React from 'react'
import { Navigate } from 'react-router-dom'
import { user } from '../recoil/recoilState'
import { useRecoilValue } from 'recoil'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const loggedIn = useRecoilValue(user);

    return (
        <div>
            {loggedIn ? <Navigate to="/" /> : children}
        </div>
    )
}

export default ProtectedRoute