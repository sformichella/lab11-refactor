const root = location.origin;

export function handleHomeButton() {
    location.href = root;
}

export function handlePlayButton() {
    localStorage.setItem('catches-and-encounters', JSON.stringify([]));

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