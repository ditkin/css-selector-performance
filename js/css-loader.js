var input = document.getElementById('css-picker');
input.addEventListener('keyup', function (e) {
	if (e.keyCode == 13) {
		loadCss(e.currentTarget.value);
	}
});

function loadCss(sheetName) {
	var head = document.getElementsByTagName('head')[0];
	var cssNode = document.createElement('link');

	var url = 'css/' + sheetName + '.css';
	cssNode.href = url;
  cssNode.type = 'text/css';
	cssNode.rel = 'stylesheet';

	cssNode.onload = timeThis;

	head.appendChild(cssNode);
}
