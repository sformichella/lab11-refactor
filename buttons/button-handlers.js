const root = localStorage.getItem('root');

export function handleHomeButton() {
    location.href = root;
}

export function handlePlayButton() {
    localStorage.setItem('catches-and-encounters', JSON.stringify([]));

    console.log(location.href);

    if (location.href === root) {
        location.href = './game-page';
    } else {
        location.href = '../game-page';
    };
}

export function handleStatsButton() {
    if (location.href === root) {
        location.href = './results';
    } else {
        location.href = '../results';
    };
}