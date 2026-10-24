const STORAGE_KEY = 'messageData';
//优先从本地读取留言
let messages = getFromLocal(STORAGE_KEY)||[];
let messageId = 1;
if(messages.length>0){
    const maxId = Math.max(...messages.map(item=>item.messageId));
    messageId = maxId + 1;
}

//const messages = [];
//let messageId = 1;
//获取dom元素
const form = document.querySelector('.message-form');
const messageCount = document.querySelector('#message-count');
const messageList = document.querySelector('#message-list');

function renderMessage(){
    messageList.innerHTML = '';
    messageCount.innerHTML = `一共有${messages.length}条留言`;

    messages.forEach(item=>{
        //创建li
        const li = document.createElement('li');
        //创建用户名节点
        const nameP = document.createElement('p');
        nameP.innerText = `姓名：${item.name}`;
        //创建邮箱节点
        const emailP = document.createElement('p');
        emailP.innerText = `邮箱：${item.email}`;
        //创建留言内容节点
        const contentP = document.createElement('p');
        contentP.innerText = `留言：${item.content}`;

        //删除按钮
        const delBtn = document.createElement('button');
        delBtn.type = "button";
        delBtn.className = 'del-btn';
        delBtn.innerText = "删除";
        delBtn.dataset.id = item.messageId;//给按钮加上留言id的属性
        delBtn.addEventListener('click',function(){
            const delId = Number(this.dataset.id);
            messages = messages.filter(msg=>msg.messageId !==delId);
            saveToLocal(STORAGE_KEY,messages);
            renderMessage();
        })
        //把p加入li
        li.append(nameP);
        li.append(emailP);
        li.append(contentP);
        li.append(delBtn);
        //把li加入ul
        messageList.append(li);
    });
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    //获取输入框的元素
    const nameInput = form.name;
    const emailInput = form.email;
    const contentInput = form.msgcontent;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const content = contentInput.value.trim();

    if(name===''||content===''||email===''){
        alert('昵称、邮箱和留言不能为空！');
        return ;
    }
    //组装留言对象，push进数组
    const newMsg = {
        messageId:messageId++,
        name:name,
        email:email,
        content:content
    };
    messages.push(newMsg);
    //保存到本地
    saveToLocal(STORAGE_KEY,messages);
    //渲染函数
    renderMessage();
    nameInput.value='';
    emailInput.value='';
    contentInput.value='';
});
renderMessage();