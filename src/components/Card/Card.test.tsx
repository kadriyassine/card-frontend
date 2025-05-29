import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    it('affiche la valeur et le symbole correct', () => {
        render(<Card color="Cœur" value="AS" />);
        expect(screen.getByText(/AS ♥/)).toBeInTheDocument();
        expect(screen.getByText(/♥ AS/)).toBeInTheDocument();
    });

    it('applique la classe card-red pour les cartes rouges', () => {
        const { container } = render(<Card color="Carreaux" value="10" />);
        expect(container.firstChild).toHaveClass('card-red');
    });

    it('applique la classe card-black pour les cartes noires', () => {
        const { container } = render(<Card color="Pique" value="Valet" />);
        expect(container.firstChild).toHaveClass('card-black');
    });
});
