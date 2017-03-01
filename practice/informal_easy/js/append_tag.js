function my_func1() {
    var mydiv = document.createElement("div");
    mydiv.style.height = '100px';
    mydiv.style.width = '100px';
    mydiv.style.background = 'red';
    mydiv.style.marginTop = '20px';
    document.getElementsByTagName('button')[0].appendChild(mydiv);
}
function my_func2() {
    document.getElementById('my_button2').setAttribute('class','mydiv2')
}
