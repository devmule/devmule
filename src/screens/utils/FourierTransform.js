// https://www.youtube.com/watch?v=7_vKzcgpfvU

const PI2 = Math.PI * 2;


function discreteFourierTransform(dots) {
	let X = [];
	let N = dots.length;
	for (let k = 0; k < N; k++) {
		let r = 0, i = 0;
		for (let n = 0; n < N; n++) {
			
			let phi = (2 * Math.PI * k * n) / N;
			let r_n = Math.cos(phi);
			let i_n = -Math.sin(phi);
			
			r += dots[n].x * r_n - dots[n].y * i_n;
			i += dots[n].x * i_n + dots[n].y * r_n;
		}
		r /= N;
		i /= N;
		
		let freq = k;
		let amp = Math.sqrt(r * r + i * i);
		let phase = Math.atan2(i, r);
		X[k] = {r, i, freq, amp, phase};
	}
	return X;
}

export default class FourierTransform {
	
	constructor(canvas, dots, w = 100, h = 100) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.canvas.width = w;
		this.ctx.canvas.height = h;
		
		this.cycles = discreteFourierTransform(dots)
			.sort((a, b) => b.amp - a.amp); // сначала самые длинные
		
		this.speed = 3;
		this.scale = 1.3;
		this.time = 0;
		this.backgroundColor = '#1F1F1F';
		this.path = [];
		
		// encapsulate player
		let playing = false;
		let player = () => {
			if (playing) {
				this.draw();
				requestAnimationFrame(player);
				//setTimeout(player, 16);
			}
		};
		
		this.play = () => {
			if (!playing) {
				playing = true;
				player();
			}
		};
		
		this.stop = () => {
			if (playing) playing = false;
		};
	}
	
	draw() {
		this.time += this.speed * PI2 / this.cycles.length;
		
		this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.fillStyle = this.backgroundColor;
		this.ctx.fill();
		this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.fillStyle = this.backgroundColor;
		this.ctx.fill();
		
		this.drawCycles(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
	}
	
	
	drawCycles(x = 0, y = 0) {
		
		this.ctx.strokeStyle = '#ffffff';
		this.ctx.lineWidth = 1;
		
		
		
		for (let i = 0; i < this.cycles.length; i++) {
			
			this.ctx.beginPath();
			this.ctx.moveTo(x, y);
			
			let cycle = this.cycles[i];
			x += this.scale * cycle.amp * Math.cos(cycle.freq * this.time + cycle.phase);
			y += this.scale * cycle.amp * Math.sin(cycle.freq * this.time + cycle.phase);
			
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
		
		
		this.path.push([x, y]);
		
		if (this.path.length > 1) {
			this.ctx.strokeStyle = '#f00';
			this.ctx.lineWidth = 2;
			
			this.ctx.beginPath();
			this.ctx.moveTo(this.path[0][0], this.path[0][1]);
			
			for (let i = 1; i < this.path.length; i++) {
				this.ctx.lineTo(this.path[i][0], this.path[i][1]);
			}
			this.ctx.stroke();
		}
		
		if (this.time >= PI2) {
			this.time = 0;
			this.path.length = 0;
		}
	}
}
