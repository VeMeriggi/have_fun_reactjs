import React from 'react'
import styles from './styles/payment.module.css';
import {Link} from 'react-router-dom'

function Payment() {
    return (
        <div className={styles.container}>
            <div className={styles.payment}>
                <h3>Payment Gateway</h3>
                    <div className={styles.body}>
                        <input type="text" placeholder="card number..." />
                        <input type="date" placeholder="expiry date" />
                        <input type="number" placeholder="CVV" />
                    </div>
                    <div className={styles.action}>
                        <Link to="/payment-confirm"><button>Pay</button></Link>
                        <button>Reset</button>
                    </div>
            </div>
        </div>
    )
}

export default Payment
