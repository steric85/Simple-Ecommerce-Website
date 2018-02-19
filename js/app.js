// const APP = (function(){
//
//   const octopus = {
//     init: function(){
//       view.init();
//     },
//     getCategories: function(){
//       return DATABASE.getCategoryList();
//     }
//   };
//
//   const view = (function(){
//
//     function getCategoryInnerHTML(category){
//       return `
//           <img class="category-image" src=${category.image} alt=${category.name}/>
//           <div class="category-name">${category.name}</div>
//       `;
//     }
//
//     return {
//       init: function(){
//         this.categoryListElem = document.getElementById("category-list");
//         this.render();
//       },
//       render(){
//         const categories = octopus.getCategories();
//         let fragment = document.createDocumentFragment(),categoryNode;
//         categories.forEach((category) => {
//           categoryNode = document.createElement("div");
//           categoryNode.className = 'category';
//           categoryNode.setAttribute("data-category-id",`${category.id}`);
//           categoryNode.addEventListener('click', function(e) {
//               let categoryId = e.target.closest('.category').dataset.categoryId;
//               window.location.href = `itemlist.html?category=${categoryId}`;
//           });
//           categoryNode.innerHTML = getCategoryInnerHTML(category);
//           fragment.appendChild(categoryNode);
//         });
//         this.categoryListElem.appendChild(fragment);
//       }
//     };
//   })();
//
//   octopus.init();
// })();

function Category(props){

  function handleClick(){
    window.location.href = `itemlist.html?category=${props.category.id}`
  }

  return (
    <div className="category" onClick={handleClick}>
      <img className="category-image" src={props.category.image} alt={props.category.name}/>
      <div className="category-name">{props.category.name}</div>
    </div>
  );
}

function CategoryList(){
  return(
    <div id="category-list">
      {DATABASE.getCategoryList().map((category) => <Category key={category.id} category={category}/>)}
    </div>
  )
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header count={DATABASE.getCartCount()}/>
        <CategoryList />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
