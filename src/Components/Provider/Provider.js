import React, {createContext, useState, useEffect} from 'react';
import fetchApi from '../../api/fetchApi';

export const dataContext = createContext();
export const modalContext = createContext();

export const Provider = (props) => {
    const [cards, setCards] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const currentCards = await fetchApi();
            setCards(currentCards);
          }
          fetch();
    }, []);

    return (
        <dataContext.Provider value={[cards, setCards]}>
            <modalContext.Provider value={[modal, setModal]}>
                {props.children}
            </modalContext.Provider>
        </dataContext.Provider>
      )
}