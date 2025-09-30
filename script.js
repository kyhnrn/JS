function pullDown() {
 
}

window.alert("ブラウザオブジェクトの取得に成功！")
document.getElementById("hoge")
let item = document.getElementById("lists");
console.log(item.textContent);

function getElement(){
    element = document.querySelector('#shopB');
    console.log ('選ばれたのは'　+ element.textContent + 'でした');
}

function getElement(){
    element = document.querySelectorAll('.shop li');
    let len = element.length;
    for (let i =0; i < len; i++){
        console.log(element.item(i).textContent);
    }
}

let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);

const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentlist = document.getElementById("current-list")

pullDownChild.forEach(function(list){
  list.addEventListener('click', function(){
    const value = list.innerHTML
    console.log(value)
    currentlist.innerHTML=value
  })
})

window.addEventListener('load',function(){
    const pullDownButton = this.document.getElementById("lists")
})


pullDownButton.addEventListener("mouseover", function() {
  console.log("乗った時は青色");
  this.setAttribute("style","background-color:blue;")
 })


pullDownButton.addEventListener("mouseout", function() {
  console.log("外れた時は赤色");
  this.removeAttribute("style","background-color:red;")
});

pullDownButton.addEventListener("click", function() {
  if(pullDownParents.getAttribute("style")=="display:block;"){
    pullDownParents.removeAttribute("style","display:block")
    console.log("非表示")
  } else{
    pullDownParents.setAttribute("style","display:block;")
    console.log("表示")
  }
});

window.addEventListener('load', pullDown);

