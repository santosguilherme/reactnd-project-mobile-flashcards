import AsyncStorageApi from '../async-storage/asyncStorageApi';


const api = new AsyncStorageApi('reactnd-project-mobile-flashcards:decks');

export default {
    getDecks: () => api.query(),
    getDeck: id => api.get(id),
    saveDeckTitle: title => {
        // TODO: criar um model para o deck
        // TODO: adicionar a este model o title
        api.save(title, {title});
    },
    addCardToDeck: (title, card) => {
        // TODO: recuperar o deck
        // TODO: adicionar o card
        // TODO: atualizar o deck
    }
};