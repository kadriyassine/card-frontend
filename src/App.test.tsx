import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import * as api from './services/api';

const mockData = {
    unsorted: [
        { color: 'Cœur', value: 'AS' },
        { color: 'Pique', value: '10' },
    ],
    sorted: [
        { color: 'Pique', value: '10' },
        { color: 'Cœur', value: 'AS' },
    ],
};

vi.spyOn(api, 'fetchCards').mockImplementation(async () => mockData);

describe('App component', () => {
    it('affiche le chargement puis les mains', async () => {
        render(<App />);
        expect(screen.getByText(/Chargement/)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Main initiale')).toBeInTheDocument();
            expect(screen.getByText('Main triée')).toBeInTheDocument();
        });
    });

    it('gère une erreur de chargement', async () => {
        vi.spyOn(api, 'fetchCards').mockRejectedValueOnce(new Error('Erreur réseau'));
        render(<App />);

        await waitFor(() => {
            expect(screen.getByText(/Erreur réseau/)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Réessayer/ })).toBeInTheDocument();
        });

        // On clique sur "Réessayer"
        fireEvent.click(screen.getByRole('button', { name: /Réessayer/ }));
    });
});
