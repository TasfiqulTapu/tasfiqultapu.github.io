const clock = document.querySelector('#time');
setInterval(() => {
    //get gmt+6 time
    let date = new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok',day: 'numeric', month: 'long', year: 'numeric'});
    let tiem = new Date().toLocaleString('en-GB', {timeZone: 'Asia/Bangkok',hour: 'numeric', minute: 'numeric', second: 'numeric'});
    clock.innerHTML = `${date} • ${tiem}`;
}, 1000);



