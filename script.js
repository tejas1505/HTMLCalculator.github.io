if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function (reg) {
            console.log("service worker registered");
        }).catch(function (err) {
            console.log("error: ", err)
        });
}

function evaluated() {
    var txt = document.getElementById('txt');
    try {
        txt.value = eval(txt.value);
    } catch {
        txt.value = 'Error';
    }

}

console.log(Math.sqrt(9))