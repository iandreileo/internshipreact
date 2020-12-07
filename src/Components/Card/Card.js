import React, { useContext, useState } from 'react';
import styles from './Card.module.css';
import Modal from '../Modal/Modal';
import { modalContext } from '../Provider/Provider';


const Card = ({data, isLast}) => {
    const [modal, setModal] = useContext(modalContext);

    const timestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDay();
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${months[month]} ${day}, ${year}`;
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={data.thumbnail.small}/>
                    {
                        isLast ?
                        <div className={styles.hover} onClick={() => setModal(true)}>
                            <h3>Learn More</h3>
                        </div> : null
                    }
                </div>
                <div className={styles.bullets}>
                    <span style={{color: "#85DCBA", fontSize: "2rem"}}>&#8226;</span>
                    <span style={{color: "#E8A87C", fontSize: "2rem"}}>&#8226;</span>
                </div>
                <div className={styles.title}>
                    <b><h2>{data.title}</h2></b>
                </div>
                <div className={styles.paragraph}>
                    <p>{data.content}</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.author}>
                        {`${data.author.name} - ${data.author.role}`}
                    </div>
                    <div className={styles.date}>
                        {timestampToDate(data.date)}
                    </div>
                </div>
            </div>
            {
                isLast && modal ? <Modal data={data}/>: null
            }
        </>
    );
}

export default Card;