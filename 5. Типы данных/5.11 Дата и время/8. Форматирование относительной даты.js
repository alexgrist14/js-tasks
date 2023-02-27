function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return "прямо сейчас";
    } else if (diff < 60000) {
        return Math.floor(diff / 1000) + " сек. назад";
    } else if (diff < 3600000) {
        return Math.floor(diff / 60000) + " мин. назад";
    } else {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear().toString().slice(-2);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );