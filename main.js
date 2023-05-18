//硬把h3的內容改掉，且點h3會跳通知。
var heading = document.querySelector('h3');
heading.textContent = 'Click me!';
document.querySelector('h3').onclick = function(){
  alert('The game is so hard!')
}

//點選圖片就會換一張圖片。
var image = document.querySelector('img');
image.onclick = function(){
  let what = image.getAttribute('src');
  if (what === 'image/scoreboard.png'){
    image.setAttribute('src','image/scoreboard2.png');
  }else{
    image.setAttribute('src','image/scoreboard.png');
  }
}

//以下是設定名字的環節。
var button = document.querySelector('button');
var heading2 = document.querySelector('h1');
function set_name(){
  let name = prompt('Please enter your name.');
  localStorage.setItem('name',name);
  heading2.innerHTML = 'Nice to meet you, ' + name;
}

//如果名字非空則用名字，否則重新設定名字。
if (!localStorage.getItem('name')){
  set_name();
}else{
  let oldname = localStorage.getItem('name');
  heading2.innerHTML = 'Nice to meet you, ' + oldname;
}

//按按鈕已設定名字。
button.onclick = function(){
  set_name();
}

document.querySelector("#read-file").addEventListener('click', function() {
	// no file selected to read
	if(document.querySelector("#file").value == '') {
		console.log('No file selected');
		return;
	}

	var file = document.querySelector("#file").files[0];

	var reader = new FileReader();
	reader.onload = function(e) {
		// binary data
		console.log(e.target.result);
	};
	reader.onerror = function(e) {
		// error occurred
		console.log('Error : ' + e.type);
	};
	reader.readAsBinaryString(file);
});


