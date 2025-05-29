import React from 'react';
import Card from '../Card/Card';
import './CardHand.css';

interface CardHandProps {
    cards: Card[];
    title: string;
}

/**
 * Composant affichant une main de cartes.
 */
const CardHand = ({ cards, title }: CardHandProps) => {
    return (
        <section className="card-hand" aria-label={title}>
            <h2 className="card-hand-title">{title}</h2>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card
                        key={`${card.color}-${card.value}-${index}`}
                        color={card.color}
                        value={card.value}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardHand;
