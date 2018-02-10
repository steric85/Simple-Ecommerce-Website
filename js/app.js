const APP = (function(){

  const model = {
    init: function(){
      DATABASE.init();
    }
  };

  const octopus = {
    init: function(){
      model.init();
      view.init();
    },
    getCategories: function(){
      return DATABASE.getCategoryList();
    }
  };

  const view = (function(){

    function getCategoryInnerHTML(categoryImage,categoryName){
      return `
          <img class="category-image" src=${categoryImage} alt=${categoryName}/>
          <div class="category-name">${categoryName}</div>
      `;
    }

    return {
      init: function(){
        this.categoryListElem = document.getElementById("category-list");
        this.render();
      },
      render(){
        const categories = octopus.getCategories();
        let fragment = document.createDocumentFragment(),categoryNode;
        categories.forEach((category) => {
          categoryNode = document.createElement("div");
          categoryNode.className = 'category';
          categoryNode.setAttribute("data-category-id",`${category.id}`);
          categoryNode.addEventListener('click', function(e) {
              let categoryId = e.target.closest('.category').dataset.categoryId;
              window.location.href = `itemlist.html?category=${categoryId}`;
          });
          categoryNode.innerHTML = getCategoryInnerHTML(category.image,category.name);
          fragment.appendChild(categoryNode);
        });
        this.categoryListElem.appendChild(fragment);
      }
    };
  })();

  octopus.init();
})();
