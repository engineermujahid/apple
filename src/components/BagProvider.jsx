import React, { createContext, useContext, useState, useEffect } from "react";

const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState([]);

    useEffect(() => {
        console.log("Loading items from localStorage");
        const storedItems = JSON.parse(localStorage.getItem("bagItems"));
        if (storedItems) {
            console.log("Loaded items:", storedItems);
            setBagItems(storedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems));
    }, [bagItems]);

    const addToBag = (item) => {
        setBagItems([...bagItems, item]);
    };

    const clearBag = () => {
        setBagItems([]);
    };

    return <BagContext.Provider value={{ bagItems, addToBag, clearBag }}>{children}</BagContext.Provider>;
};

export const useBag = () => useContext(BagContext);
