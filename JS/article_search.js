const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const resetBtn = document.querySelector('#reset-btn');
const categorySelect = document.querySelector('#category-select');

//搜索事件
searchBtn.addEventListener('click',function(){
    const keyword = searchInput.value.trim().toLowerCase();
    //增加分类筛选条件
    const selectCat = categorySelect.value;

    const result = articles.filter(item=>{
        const title = item.title.toLocaleLowerCase();
        const catMatch = selectCat===''||item.category===selectCat;
        return title.includes(keyword)&&catMatch;//title中包含keyword，返回true，并且catchCat返回true（符合选择的类别）并将该条文章放入result数组
    });
    renderArticle(result);
});
//重置事件
resetBtn.addEventListener('click',function(){
    searchInput.value = '';
    categorySelect.value='';
    renderArticle(articles);
});