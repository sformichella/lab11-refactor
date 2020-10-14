const root = location.href.slice(0, location.href.length - 8);

export function handleHomeButton() {
    if (location.href === '/') {
        console.log('You are home, ya dingus!');
    } else {
        location.href = root;
    };

    console.log(root);
}

export function handlePlayButton() {
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