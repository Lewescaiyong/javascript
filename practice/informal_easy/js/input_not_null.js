function my_func1() {
    var content = document.getElementById('my_input').value;
    if (content ==''|| content == null || content == undefined){
        alert('内容不能为空')
    }
    else {
        alert(content)
    }
}
