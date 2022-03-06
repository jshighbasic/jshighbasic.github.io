try {
    location.href.includes('&script=') ? editor.setValue(decodeURIComponent(location.href.split('&script=')[1])) : '';
    location.href.includes('?error=') ? $('#error').html(`<span class="material-icons-round warn">warning</span>&nbsp;${decodeURIComponent(location.href.split('?error=')[1].split('&script=')[0])}`) : '';
    if (location.href.includes('?success=t') && localStorage.getItem(location.href.split('token=')[1].split('&')[0]) == result) {
        $('#error').html(`<span class="material-icons-round done">done</span>Test passed!<br>Output:<br>${localStorage.getItem(location.href.split('token=')[1].split('&')[0])}`);
    } else if (localStorage.getItem(location.href.split('token=')[1].split('&')[0]) != result) {
        $('#error').html(`<span class="material-icons-round warn">dangerous</span>Wrong answer: <br>Output:<br>${localStorage.getItem(location.href.split('token=')[1].split('&')[0])}`);
    }
} catch (e) {
    console.log(e);
}
var open_tip = false;
function open_tips(e, num='t1') {
    if(num=='t1'){
        if (!open_tip) {
            $('#t1').css('display', 'block');
            open_tip = true;
            e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility</span>`;
        } else {
            $('#t1').css('display', 'none');
            open_tip = false;
            e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility_off</span>`;
        }
    }
    else if(num=='t2'){
        if (!open_tip) {
            $('#t2').css('display', 'block');
            open_tip = true;
            e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility</span>`;
        } else {
            $('#t2').css('display', 'none');
            open_tip = false;
            e.innerHTML = `<span class="material-icons-round" style="font-size: 24px !important;">visibility_off</span>`;
        }
    }
}
window.onload = function() {
    var offset = sessionStorage.getItem("offsetTop");
    window.scrollTo(0, offset);
    window.onscroll = function() {
        sessionStorage.setItem("offsetTop", document.documentElement.scrollTop);
    };
};