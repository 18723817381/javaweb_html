function saveToLocal(key,value){
    const str = JSON.stringify(value);
    localStorage.setItem(key,str);
}
function getFromLocal(key){
    const str = localStorage.getItem(key);
    if(!str) return null;
    try{
        return JSON.parse(str);
    }catch(err){
        console.error('本地数据解析失败！',err);
        return null;
    }
}