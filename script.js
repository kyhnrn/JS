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