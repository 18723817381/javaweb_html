const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const resetBtn = document.querySelector('#reset-btn');

//搜索事件
searchBtn.addEventListener('click',function(){
    const keyword = searchInput.value.trim().toLowerCase();
    const result = articles.filter(item=>{
        const title = item.title.toLocaleLowerCase();
        return title.includes(keyword);//title中包含keyword，返回true，并将该条文章放入result数组
    });
    renderArticle(result);
});
//重置事件
resetBtn.addEventListener('click',function(){
    searchInput.value = '';
    renderArticle(articles);
});