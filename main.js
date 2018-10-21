'use strict'
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createBlock() {
		let block = document.createElement('div');
		block.textContent = ' Какой-то текст ';
		block.style.cssText = ` height:${this.height}px;
								width:${this.width}px;
								background-color:${this.bg};
								font-size:${this.fontSize}px;
								text-align:${this.textAlign};`;
		document.body.appendChild(block);
	}
}

let element = new Options(50, 100, '#ccc', 15, 'center');
element.createBlock();