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

window.addEventListener('load',function(){
    const pullDownButton = this.document.getElementById("lists")
})


pullDownButton.addEventListener("mouseover", function() {
  console.log("乗る");
  pullDownButton.setAttribute("style","background-color:blue;")
 })


pullDownButton.addEventListener("mouseout", function() {
  console.log("外れる");
  pullDownButton.removeAttribute("style","background-color:red;")
});

pullDownButton.addEventListener("click", function() {
  console.log("クリック");
  pullDownButton.setAttribute("style","background-color:green;")
});
