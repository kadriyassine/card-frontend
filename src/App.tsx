import React, { useState, useEffect, useCallback } from 'react';
import { fetchCards } from './services/api';
import CardHand from './components/CardHand/CardHand';
import './App.css';
import type { Card, ApiResponse } from './types';

const INITIAL_HANDS_STATE = {
    unsorted: [] as Card[],
    sorted: [] as Card[],
};

function App() {
    const [hands, setHands] = useState(INITIAL_HANDS_STATE);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fonction pour charger les cartes depuis l'API
    const loadCards = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data: ApiResponse = await fetchCards();
            setHands(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur inconnue');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadCards();
    }, [loadCards]);

    if (loading) {
        return (
            <main className="loading-container" role="status" aria-live="polite">
                <div className="loading-spinner"></div>
                <p>Chargement des cartes...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="error-container" role="alert">
                <p className="error-message">{error}</p>
                <button onClick={loadCards} className="retry-button" aria-label="Réessayer le chargement">
                    Réessayer
                </button>
            </main>
        );
    }

    return (
        <main className="app-container">
            <h1 className="app-title">Jeu de Cartes</h1>
            <CardHand cards={hands.unsorted} title="Main initiale" />
            <CardHand cards={hands.sorted} title="Main triée" />
            <button onClick={loadCards} className="new-hand-button" aria-label="Générer une nouvelle main">
                Nouvelle main
            </button>
        </main>
    );
}

export default App;
