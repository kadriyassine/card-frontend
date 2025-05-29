export type CardColor = 'Carreaux' | 'Cœur' | 'Pique' | 'Trèfle';

export type CardValue =
    | 'AS'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'Valet'
    | 'Dame'
    | 'Roi';

export interface Card {
    color: CardColor;
    value: CardValue;
}

export interface ApiResponse {
    unsorted: Card[];
    sorted: Card[];
}
