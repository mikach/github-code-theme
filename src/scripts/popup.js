import ext from './utils/ext';
import storage from './utils/storage';

const selectNode = document.querySelector('select');

selectNode.addEventListener('change', e => {
    storage.set({ 'github-theme': e.target.value });
});

storage.get('github-theme', theme => {
    const selected = theme['github-theme'];

    selectNode
        .querySelector(`option[value="${selected}"]`)
        .setAttribute('selected', true);
});
