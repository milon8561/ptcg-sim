import { draw, handleViewButtonClick } from '../../../actions/zones/deck-actions.js';
import { shuffleZone } from '../../../actions/zones/shuffle-zone.js';
import { mouseClick } from '../../../front-end.js';
import { appendMessage } from '../../../setup/chatbox/messages.js';
import { determineUsername } from '../../../setup/general/determine-username.js';

export const initializeDeckButtons = () => {
    const shuffleDeckButton = document.getElementById('shuffleDeckButton');
    shuffleDeckButton.addEventListener('click', () => {
        const user = mouseClick.user;
        shuffleZone(mouseClick.user, 'deck');
        appendMessage(user, determineUsername(user) + ' shuffled deck', 'player');
    });

    const drawButton = document.getElementById('drawButton');
    drawButton.addEventListener('click', () => draw(mouseClick.user));

    const viewTopButton = document.getElementById('viewTopButton');
    viewTopButton.addEventListener('click', () => handleViewButtonClick(mouseClick.user, true));

    const viewBottomButton = document.getElementById('viewBottomButton');
    viewBottomButton.addEventListener('click', () => handleViewButtonClick(mouseClick.user, false));
};