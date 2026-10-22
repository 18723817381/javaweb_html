//获取html元素
const regForm = document.getElementById('regForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pwd = document.getElementById('pwd')
const rePwd = document.getElementById('rePwd');

const userTip = document.getElementById('userTip');
const emailTip = document.getElementById('emailTip');
const phoneTip = document.getElementById('phoneTip');
const pwdTip = document.getElementById('pwdTip');
const rePwdTip = document.getElementById('rePwdTip');
const resultMsg = document.getElementById('resultMsg');

//正则表达式
const regUser = /^\w{4,12}$/;//用户名
const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;//邮箱368301504@qq.com
const regPhone = /^1\d{10}$/;//电话
const regPwd = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;//密码

//focus出场规则函数
const checkname_focus = function(){
    userTip.className = 'tip info';
    userTip.textContent = '提示：请输入4-12位的用户名（仅可包括字母、数字、下划线）';
}
const checkemail_focus = function(){
    emailTip.className = 'tip info';
    emailTip.textContent = '提示：请输入合法邮箱地址，例如：xxxxxx@qq.com';
}
const checkphone_focus = function(){
    phoneTip.className = 'tip info';
    phoneTip.textContent = '提示：请输入11位的电话号码'
}
const checkpwd_focus = function(){
    pwdTip.className = 'tip info';
    pwdTip.textContent = '提示：请输入包含数字和字母的6-20位密码';
}
const checkrePwd_focus = function(){
    rePwdTip.className = 'tip info';
    rePwdTip.textContent = '提示：请再次输入相同密码'
}

//绑定focus相关事件
username.addEventListener('focus',checkname_focus);
email.addEventListener('focus',checkemail_focus);
phone.addEventListener('focus',checkphone_focus);
pwd.addEventListener('focus',checkpwd_focus);
rePwd.addEventListener('focus',checkrePwd_focus);

//blur失去焦点规则函数
const checkname_blur = function(){
   const val = username.value.trim();
   if(val===""){
    userTip.className = 'tip error';
    userTip.textContent = '用户名不能为空！'
    return false;
   }else if(!regUser.test(val)){
    userTip.className = 'tip error';
    userTip.textContent = '用户名格式错误！';
    return false;
   }else{
    userTip.className = 'tip info';
    userTip.textContent = '用户名格式正确！';
    return true;
   }

}
const checkemail_blur = function(){
    const val = email.value.trim();
    if(val===""){
        emailTip.className = 'tip error';
        emailTip.textContent = '邮箱不能为空！';
        return false;
    }else if(!regEmail.test(val)){
        emailTip.className = 'tip error';
        emailTip.textContent = '邮箱格式错误！';
        return false;
    }else{
        emailTip.className = 'tip info';
        emailTip.textContent = '邮箱格式正确！';
        return true;
    }
}
const checkphone_blur = function(){
    const val = phone.value.trim();
    if(val===''){
        phoneTip.className = 'tip error';
        phoneTip.textContent = '手机号码不能为空！';
        return false;
    }else if(!regPhone.test(val)){
        phoneTip.className = 'tip error';
        phoneTip.textContent = '手机号码格式错误！';
        return false;
    }else{
        phoneTip.className = 'tip info';
        phoneTip.textContent = '手机号码格式正确！';
        return true;
    }
}
const checkpwd_blur = function(){
    const val = pwd.value.trim();
    if(val===''){
        pwdTip.className = 'tip error';
        pwdTip.textContent = '密码不能为空！';
        return false;
    }else if(!regPwd.test(val)){
        pwdTip.className = 'tip error';
        pwdTip.textContent = '密码格式错误！';
        return false;
    }else{
        pwdTip.className = 'tip info';
        pwdTip.textContent = '密码格式正确！';
        return true;
    }
}
const checkrePwd_blur = function(){
    const pwdVal = pwd.value.trim();
    const repwdVal = rePwd.value.trim();
    if(repwdVal===''){
        rePwdTip.className = 'tip error';
        rePwdTip.textContent = '确认密码不能为空！';
        return false;
    }else if(repwdVal!==pwdVal){
        rePwdTip.className = 'tip error';
        rePwdTip.textContent = '两次密码不一致！';
        return false;
    }else{
        rePwdTip.className = 'tip info';
        rePwdTip.textContent = '两次密码一致！';
        return true;
    }
}
//绑定blur相关事件
username.addEventListener('blur',checkname_blur);
email.addEventListener('blur',checkemail_blur);
phone.addEventListener('blur',checkphone_blur);
pwd.addEventListener('blur',checkpwd_blur);
rePwd.addEventListener('blur',checkrePwd_blur);

//提交表单事件
regForm.addEventListener('submit',function(e){
    console.log('触发了submit事件');
    e.preventDefault();
    resultMsg.textContent = '';

    const nameOK = checkname_blur();
    const emailOK = checkemail_blur();
    const phoneOK = checkphone_blur();
    const pwdOK = checkpwd_blur();
    const repwdOK = checkrePwd_blur();

    if(!nameOK||!emailOK||!phoneOK||!pwdOK||!repwdOK){
        resultMsg.className = 'tip error';
        resultMsg.textContent = '表单验证失败，请检查红色提示！';
    }else{
         resultMsg.textContent = '验证通过！';
    }
})