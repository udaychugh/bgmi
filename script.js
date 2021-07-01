document.addEventListener('click', function (e) {
    let body = document.querySelector('body');
    let bullet = document.createElement('span');
    bullet.classList.add('bullet');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    body.appendChild(bullet);



    //sound function
    let sound = document.getElementById('audio');
    sound.play();

    //blood appearance

    //random blood images
    let images = [
        'url(assets/blood1.png)',
        'url(assets/blood2.png)',
        'url(assets/blood3.png)',
        'url(assets/blood4.png)'
    ];

    let blood = document.createElement('span');
    blood.classList.add('blood');

    let bg = images[Math.floor(Math.random() * images.length)];
    blood.style.backgroundImage = bg;

    blood.style.left = Math.random() * innerWidth + 'px';
    blood.style.top = Math.random() * innerHeight + 'px';
    body.appendChild(blood);


    //bullets and blood time out function
    setTimeout(function () {
        bullet.remove();
        blood.remove();
    }, 4000);


})

var clicked = document.getElementById('clicked');
var fire = 0;
var damage = 0;
var finish = 0;

clicked.onclick = function () {
    fire++;
    damage = damage + 10;

    document.getElementById('fire').innerHTML = fire;
    document.getElementById('damage').innerHTML = damage;
    
    if(damage%100 == 0)
        {
            finish = damage/100;
            document.getElementById('finish').innerHTML = finish;
            let showFinish = document.createElement('h1');
            showFinish.classList.add('showFinish');
            document.getElementsByClassName('showFinish').innerHTML = "you killed"
        }
}
