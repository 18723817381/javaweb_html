const skinBtn = document.getElementById('skinBtn');
const body = document.body;
//页面加载时：读取本地保存的主题，自动应用
if(localStorage.getItem('theme')==='night'){
    body.classList.add('night');
    skinBtn.textContent="切换白天模式"
}else{
    skinBtn.textContent="切换黑夜模式"
}
//切换函数
const changeSkin = function() {
    if(body.classList.contains('night')){
        //切回白天
        body.classList.remove('night');
        localStorage.setItem('theme','day');
        skinBtn.textContent="切换黑夜模式"
    }else{
        body.classList.add('night');
        localStorage.setItem('theme','night');
        skinBtn.textContent="切换白天模式"
    }
}
skinBtn.addEventListener('click', changeSkin);