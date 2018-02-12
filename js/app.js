const APP = (function(){


  const octopus = {
    init: function(){
      view.init();
    },
    getCategories: function(){
      return DATABASE.getCategoryList();
    }
  };

  const view = (function(){

    function getCategoryInnerHTML(category){
      return `
          <img class="category-image" src=${category.image} alt=${category.name}/>
          <div class="category-name">${category.name}</div>
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
          categoryNode.innerHTML = getCategoryInnerHTML(category);
          fragment.appendChild(categoryNode);
        });
        this.categoryListElem.appendChild(fragment);
      }
    };
  })();

  octopus.init();
})();
