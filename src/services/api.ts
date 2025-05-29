import type { ApiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Appelle l'API pour générer une nouvelle main de cartes.
 * @returns Promise<ApiResponse> avec mains triées et non triées.
 * @throws Erreur en cas de problème réseau ou HTTP.
 */
export const fetchCards = async (): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${API_URL}/api/cards/generate`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des cartes:', error);
        throw new Error('Impossible de charger les cartes. Veuillez réessayer.');
    }
};
