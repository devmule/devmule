import about from './greet.html';
import './greet.css';

import Screen from "../Screen";
import * as _3D from "../utils/3D.js";
import THEME from "../../THEME";
import TextTyper from "../utils/textTyper";

export default class Greet extends Screen {
	constructor(container) {
		super(container);
		
		this.content.innerHTML = about;
		
		this.torusCanvas = document.createElement('canvas');
		this.torusCanvas.style.left = 'calc(50% - 400px + min(20%, 350px))';
		this.torusCanvas.style.top = 'calc(50% - 400px)';
		this.torusCanvas.style.position = 'absolute';
		this.background.appendChild(this.torusCanvas);
		
		this.scene = new _3D.Scene3D(this.torusCanvas, 800, 800);
		this.scene.backgroundColor = THEME.backgroundColor;
		
		let torus = new _3D.Torus(24, 16, 1, 2);
		torus.color = THEME.brightColor2;
		
		this.scene.figures.push(torus);
		this.scene.play();
		
		let texElem = this.content.getElementsByClassName('about-text')[0];
		texElem.style.textShadow = `${THEME.backgroundColor} 0 0 20px`;
		
		let text = `Hi! I am devmule.\nI develop multiplatform applications and games!`;
		
		this.typer = new TextTyper(texElem, text);
		this.typer.type();
	}
}
