import storage from './utils/storage';
import ext from './utils/ext';

function applyTheme() {
    storage.get('github-theme', theme => {
        const selected = theme['github-theme'];

        if (selected) {
            const themes = [].filter.call(
                document.body.classList,
                className => className.indexOf('github-theme') === 0
            );

            themes.forEach(t => document.body.classList.remove(t));

            document.body.classList.add(`github-theme-${selected}`);
        }
    });
}

applyTheme();

ext.storage.onChanged.addListener(applyTheme);
