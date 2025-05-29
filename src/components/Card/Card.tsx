import React from 'react';
import './Card.css';
import type { Card as CardType, CardColor } from '../../types';

interface CardProps extends CardType {}

const SYMBOLS: Record<CardColor, string> = {
    Carreaux: '♦',
    Cœur: '♥',
    Pique: '♠',
    Trèfle: '♣',
};

/**
 * Composant affichant une carte avec sa couleur et sa valeur.
 */
const Card = ({ color, value }: CardProps) => {
    const symbol = SYMBOLS[color];
    const isRed = color === 'Cœur' || color === 'Carreaux';

    return (
        <div className={`card ${isRed ? 'card-red' : 'card-black'}`}>
            <div className="card-top">
                {value} {symbol}
            </div>
            <div className="card-center">{symbol}</div>
            <div className="card-bottom">
                {symbol} {value}
            </div>
        </div>
    );
};

export default Card;
