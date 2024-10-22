import React, { useState } from 'react';
import FormLesson from '../../components/FormLesson/RequestForm';
import Dashboard from '../Dashboard/Dashboard'

function AuthPage() {
    const [isLoggedIn, setLogin] = useState(false)

    return (
        <div>
            {isLoggedIn ?
            <Dashboard/>
            :
            <FormLesson
                setLogin={setLogin}/>
        }
        </div>
    )
}

export default AuthPage
