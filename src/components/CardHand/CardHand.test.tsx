import { render, screen } from '@testing-library/react';
import CardHand from './CardHand';

const cards = [
    { color: 'Cœur', value: 'AS' },
    { color: 'Pique', value: '10' },
];

describe('CardHand component', () => {
    it('affiche le titre et la liste des cartes', () => {
        render(<CardHand cards={cards} title="Test Main" />);
        expect(screen.getByText('Test Main')).toBeInTheDocument();
        expect(screen.getByText(/AS ♥/)).toBeInTheDocument();
        expect(screen.getByText(/10 ♠/)).toBeInTheDocument();
    });
});
