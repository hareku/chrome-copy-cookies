chrome.tabs.getSelected(tab => {
	chrome.cookies.getAll({"url":tab.url}, cookies => {
    var res = '';
    cookies.forEach(c => {
      if (res.length > 0) {
        res = res + '; '
      }
      res = res + c.name + '=' + c.value
    });

		var area = document.createElement('textarea');
		area.style.position = 'absolute';
		area.style.border = '0';
		area.style.padding = '0';
		area.style.margin = '0';
		area.style.height = '1px';
		area.style.top = '-10px';
		area.innerText = res;
		document.body.appendChild(area, document.body.firstChild);
		area.focus();
		area.select();
		document.execCommand("copy");
		document.body.removeChild(area);
	});
});

