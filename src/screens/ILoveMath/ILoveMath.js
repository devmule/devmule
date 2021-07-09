import Screen from "../Screen";
import FourierTransform from "../utils/FourierTransform";
import ILMJson from './path';
import THEME from "../../THEME";

export default class ILoveMath {
	constructor(container) {
		this.content = document.createElement('canvas');
		container.appendChild(this.content);
		
		let ft = new FourierTransform(this.content, ILMJson, 800, 800);
		ft.backgroundColor = THEME.backgroundColor;
		ft.play();
	}
}
