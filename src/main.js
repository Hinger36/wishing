let num = 0;

!function init() {
  laydate.render({
    elem: '#test1'
  });
  opData()
  count(data)
  search()
}()
function shuffle(arr) {
  arr.forEach((element, index) => {
    if (index !== 0) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
  
      swap(arr, index, randomIndex);
    }
  });
  return arr;
}
function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

function opData() {
  let ul = document.getElementsByClassName('content-list');
  let arr = shuffle(data)
  arr.forEach((ele, index)=> {
    createList(ele, index, ul[0]);
  })
}
function count(arr) {
  let span = document.getElementsByClassName('count')[0].children[1];
  let len = arr.length;
  span.innerHTML = `共 ${len} 条心愿`;
}

function createList(ele, index, dom) {
  
  let color = ['#f31055', '#3f3f3f', '#e9585f', '#eebbbb', '#54d669'];
  let li = document.createElement('li');
  li.innerHTML = ele.wish;
  let arr = shuffle(color);
  if (num > 4) {
    num = 0;
  }
  li.style.backgroundColor = color[num];
  num++;  
  
  dom.appendChild(li);
  
}


setInterval(upscroll, 3000);
function upscroll(){
  var content = $(".commentBox-content");
  var offset = ($(".commentBox-content").find("li").eq(0).height()+35)*-1 + "px";
  content.stop().animate({top:offset},2000,function(){
    var first = $("li").first();
    $(".commentBox-content").append(first);
    $(".commentBox-content").css("top","0px");
  });
}

function search() {
  let search = document.getElementsByClassName('in-edit')[0];
  let btn = document.getElementsByClassName('btn')[0];
  let list = document.getElementsByClassName('content-list');
  btn.addEventListener('click', function () {
    if (!search.value) {
      return;
    }
    list[1].innerHTML = '';
    list[0].style.display = 'none';
    list[1].style.display = 'block';
    let word = search.value;
    let result = data.filter( ele => (ele.wish.indexOf(word) !== -1 || ele.date === word ));
    // console.log(result);
    count(result);
    result.forEach((ele, index) => {
      createList(ele, index, list[1]);
    })
    back();
    search.value = '';
  }, false);
}
function back() {
  let list = document.getElementsByClassName('content-list');
  let back = document.getElementsByClassName('callback')[0];
  back.style.display = '';
  
  back.addEventListener('click', function () {
    list[0].style.display = '';
    list[1].style.display = '';
    back.style.display = 'none';
    count(data)
  }, false);
}
function bgColor() {
  let list = document.getElementsByClassName('content-list');
  
}
