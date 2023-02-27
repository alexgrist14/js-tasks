function getSecondsToday() {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - start;
    return Math.round(diff / 1000);
}

console.log(getSecondsToday());