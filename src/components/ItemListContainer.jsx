import React from "react";
import Button from '@mui/material/Button';

export default function ItemListContainer ({greeting}){

    return (
        <>
        <Button variant="contained" size="small">{greeting}</Button>;
        </>
    
    )
}