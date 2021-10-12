import ReactDOM from 'react-dom'

import styles from './notification.module.scss';

const notification = (props) => {

    const {title,message,status} = props;

    let statusClasses = '';
    if(status === 'success'){
        statusClasses = styles.success
    }
    if(status === 'error') {
        statusClasses = styles.error
    }
    if(status === 'pending') {
        statusClasses = styles.pending
    }
    if(status === 'login'){
        statusClasses = styles.add
    }
    if(status === 'user exist') {
        statusClasses = styles.userExist
    }

    const cssClasses = `${styles.notification} ${statusClasses}`

    return ReactDOM.createPortal(
        <div className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>, document.getElementById('notifications')
    )
}

export default notification
