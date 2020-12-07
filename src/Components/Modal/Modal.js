import React, { useContext } from 'react';
import { modalContext } from '../Provider/Provider';
import styles from './Modal.module.css';


const Modal = ({data}) => {
    const [modal, setModal] = useContext(modalContext);

    return (
        <div className={styles.overlay} onClick={() => setModal(false)}>
            <div className={styles.overlayDiv}>
                <div className={styles.closeBar}>
                    <span>x</span>
                </div>
                <div className={styles.imageDiv}>
                    <img src={data.thumbnail.small}/>
                </div>
                <div className={styles.title}>
                    <b><h2>{data.title}</h2></b>
                </div>
                <div className={styles.paragraph}>
                    <p>{data.content}</p>
                </div>
                <div className={styles.details}>
                    <img src={data.author.avatar}/>
                    <p>{`${data.author.name} - ${data.author.role}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;