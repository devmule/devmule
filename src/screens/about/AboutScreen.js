import Screen from "../Screen";
import about from './about.html';
import * as _3D from "../3D";
import THEME from "../../THEME";

export default class AboutScreen extends Screen {
	constructor(wrapper) {
		super(wrapper);
		
		this.content.innerHTML = about;
		
		this.torusCanvas = document.createElement('canvas');
		this.torusCanvas.style.right = '-200px';
		this.torusCanvas.style.position = 'absolute';
		this.background.appendChild(this.torusCanvas);
		
		this.scene = new _3D.Scene3D(this.torusCanvas, 800, 800);
		this.scene.backgroundColor = THEME.backgroundColor;
		
		let torus = new _3D.Torus(24, 16, 1, 2);
		torus.color = THEME.brightColor2;
		
		this.scene.figures.push(torus);
		this.scene.play();
	}
}
