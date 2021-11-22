import React from 'react'
import styles from './styles/login.module.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h3>Login Form</h3>
                    <div className={styles.body}>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                    </div>
                    <div className={styles.action}>
                        <Link to="/"><button>Login</button></Link>
                        <button>Reset</button>
                    </div>
            </div>
        </div>
    )
}

export default Login
