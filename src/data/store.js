// this is our reactive store
import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoints: {
        cardInfo: 'cardinfo.php',
        archetypes: 'archetypes.php',
    },
    options: {
        params: {
            num: 20,
            offset: 0,
        }
    },
    cards: [],
    statusFilter: '',
    archetypes: [],
});