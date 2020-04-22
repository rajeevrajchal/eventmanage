import React from 'react'
import Login from './container/Login'

const Auth = props => {
    return (
        <>
            <section className="authentication">
                <div class="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 login-section">
                            <Login />
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
            </section>
            
        </>
    )
}
export default Auth
