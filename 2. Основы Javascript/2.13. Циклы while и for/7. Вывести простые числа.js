function isSimple(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let n = 22;
for (let i = 2; i <= n; i++) {
    if (isSimple(i)) {
        console.log(i);
    }
}
