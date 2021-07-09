class Vector {
	constructor(x = 0, y = 0, z = 0) {
		this.set(x, y, z);
	}
	
	get amplitude() {
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}
	
	set(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

class Matrix {
	constructor() {
		this.a = 0;
		this.b = 0;
		this.c = 0;
		
		this.d = 0;
		this.e = 0;
		this.f = 0;
		
		this.g = 0;
		this.h = 0;
		this.i = 0;
	}
	
	calculate(/*Vector*/angles) {
		let cosX = Math.cos(angles.x);  //  в трёх измерениях матрицы поворота для осей X, Y, и Z имеют такой вид:
		let sinX = Math.sin(angles.x);  //       |cosZ, -sinZ,  0|       |cosY,  0,  sinY|       |1,    0,    0  |
		let cosY = Math.cos(angles.y);  //  Rz = |sinZ, cosZ,   0|, Ry = |0,     1,  0   |, Rx = |0,  cosX, -sinX|
		let sinY = Math.sin(angles.y);  //       |0,     0,     1|       |-sinY, 0,  cosY|       |0,  sinX,  cosX|
		let cosZ = Math.cos(angles.z);  //
		let sinZ = Math.sin(angles.z);  //
		this.a = cosZ * cosY;                        //  матрицу поворотов по всем осям можно получить перемножив
		this.b = cosZ * sinY * sinX - sinZ * cosX;   //  отдельные матрицы     |a, b, c|
		this.c = cosZ * sinY * cosX + sinZ * sinX;   //  R = Rz(Z)Ry(Y)Rx(X) = |d, e, f|
		this.d = sinZ * cosY;                        //                        |g, h, i|
		this.e = sinZ * sinY * sinX + cosZ * cosX;   //
		this.f = sinZ * sinY * cosX - cosZ * sinX;   //
		this.g = -sinY;                              //
		this.h = cosY * sinX;                        //
		this.i = cosY * cosX;
	}
	
	apply(/*Vector*/v, /*Vector*/vT) {
		// перемножение вектора и матрицы
		vT.x = v.x * this.a + v.y * this.b + v.z * this.c;
		vT.y = v.x * this.d + v.y * this.e + v.z * this.f;
		vT.z = v.x * this.g + v.y * this.h + v.z * this.i;
	}
}

export class Object3D {
	constructor() {
		
		if (!Object3D.init) {
			Object3D.init = true;
			Object3D.matrix = new Matrix();
			Object3D.vec = new Vector();
			Object3D.a = new Vector();
			Object3D.b = new Vector();
		}
		
		this.lines = [];
		this.color = "#fff";
		this.rotation = new Vector();
		this.scale = 1;
		this.offsetX = 0;
		this.offsetY = 0;
		
		this.minWidth = -6;
		this.maxWidth = 8;
		this.maxDistance = 1;
	}
	
	tick(dt) {
	}
	
	draw() {
	}
	
	simplePerspective(ctx, v, scale) {
		// маленький костыль, чтобы не писать целый фруструм :D
		// применение эффекта перспективной матрицы, смещение в центр и увеличение изображения
		// (Math.log(1 + Math.exp(v.z)) + 5) - softplus - чтобы не было резких искажений
		v.x = v.x * 20 * scale * (Math.log(1 + Math.exp(v.z)) + 5) + ctx.canvas.width / 2;
		v.y = -v.y * 20 * scale * (Math.log(1 + Math.exp(v.z)) + 5) + ctx.canvas.height / 2;
	}
	
	drawMultiSized(ctx, x1, y1, w1, x2, y2, w2) {
		let dx = (x2 - x1);
		let dy = (y2 - y1);
		w1 = w1 > 0 ? w1 / 2 : 0;
		w2 = w2 > 0 ? w2 / 2 : 0;
		
		let length = Math.sqrt(dx ** 2 + dy ** 2);
		if (!length) return; // exit if zero length
		dx /= length;
		dy /= length;
		ctx.moveTo(x1 - dy * w1, y1 + dx * w1);
		ctx.lineTo(x1 + dy * w1, y1 - dx * w1);
		ctx.lineTo(x2 + dy * w2, y2 - dx * w2);
		ctx.lineTo(x2 - dy * w2, y2 + dx * w2);
	}
}

export class Torus extends Object3D {
	constructor(rings, ringSegments, ringSize, offset) {
		super();
		let dots = [];
		let rotVector = new Vector();
		for (let i = 0; i < rings; i++) { // создание торуса.  положение точки зависит от положения плоскости,
			rotVector.set(0, Math.PI * 2 / rings * i);
			Object3D.matrix.calculate(rotVector);
			for (let j = 0; j < ringSegments; j++) {
				let angle = Math.PI * 2 / ringSegments * j;
				Object3D.vec.x = ringSize * Math.cos(angle) + offset;
				Object3D.vec.y = ringSize * Math.sin(angle);
				Object3D.vec.z = 0;
				let v = new Vector();
				Object3D.matrix.apply(Object3D.vec, v);
				dots.push(v);
				this.maxDistance = Math.max(this.maxDistance, v.amplitude);
			}
			for (let j = dots.length - ringSegments; j < dots.length; j++) // соединить точки в одном кольце по кругу
				this.lines.push([dots[j], dots[(j + 1) % ringSegments + dots.length - ringSegments]])
		}
		for (let j = 0; j < dots.length; j++) // соединить точки на одном уровне между кольцами по кругу
			this.lines.push([dots[j], dots[(j + ringSegments) % dots.length]]);
	}
	
	tick(dt) {
		this.rotation.x = 2;
		this.rotation.y += .2 * dt;
		this.rotation.z = 1;
	}
	
	draw(ctx) {
		
		Object3D.matrix.calculate(this.rotation);
		
		ctx.beginPath();
		for (let j = 0; j < this.lines.length; j++) {
			
			Object3D.matrix.apply(this.lines[j][0], Object3D.a);
			this.simplePerspective(ctx, Object3D.a, this.scale);
			
			Object3D.matrix.apply(this.lines[j][1], Object3D.b);
			this.simplePerspective(ctx, Object3D.b, this.scale);
			
			this.drawMultiSized(ctx,
				Object3D.a.x + this.offsetX, Object3D.a.y + this.offsetY,
				(Object3D.a.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,
				Object3D.b.x + this.offsetX, Object3D.b.y + this.offsetY,
				(Object3D.b.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,
			);
		}
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}

export class Icosahedron extends Object3D {
	constructor(radius) {
		super();
		let radMid = Math.cos(Math.PI / 6) * radius;
		let top = new Vector(0, 0, radius),
			bot = new Vector(0, 0, -radius),
			r1 = [], r2 = [];
		let seg = Math.PI * 2 / 5;
		for (let i = 0; i < 5; i++) {
			r1[i] = new Vector(Math.sin(seg * i) * radMid, Math.cos(seg * i) * radMid, radius / 2);
			r2[i] = new Vector(Math.sin(seg * i + seg / 2) * radMid, Math.cos(seg * i + seg / 2) * radMid, -radius / 2);
		}
		for (let i = 0; i < 5; i++) {
			this.lines.push([top, r1[i]]);
			this.lines.push([r1[i], r1[(i + 1) % 5]]);
			this.lines.push([r1[i], r2[i]]);
			this.lines.push([r2[i], r1[(i + 1) % 5]]);
			this.lines.push([r2[i], r2[(i + 1) % 5]]);
			this.lines.push([bot, r2[i]]);
		}
	}
	
	tick(dt) {
		this.rotation.x = 2;
		this.rotation.y += .2 * dt;
		this.rotation.z = 1;
	}
	
	draw(ctx) {
		
		Object3D.matrix.calculate(this.rotation);
		
		ctx.beginPath();
		for (let j = 0; j < this.lines.length; j++) {
			
			Object3D.matrix.apply(this.lines[j][0], Object3D.a);
			this.simplePerspective(ctx, Object3D.a, this.scale);
			
			Object3D.matrix.apply(this.lines[j][1], Object3D.b);
			this.simplePerspective(ctx, Object3D.b, this.scale);
			
			this.drawMultiSized(ctx,
				Object3D.a.x + this.offsetX, Object3D.a.y + this.offsetY,
				(Object3D.a.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,
				Object3D.b.x + this.offsetX, Object3D.b.y + this.offsetY,
				(Object3D.b.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,
			);
		}
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}

export class Scene3D {
	constructor(canvas, w = 100, h = 100) {
		this.ctx = canvas.getContext('2d');
		this.backgroundColor = '#1F1F1F';
		this.setSize(w, h);
		
		this.figures = [];
		
		// encapsulate player
		let lastTime = 0;
		let playing = false;
		let player = () => {
			let nowTime = Date.now();
			let dt = (nowTime - lastTime) / 1000; // в секундах
			lastTime = nowTime;
			if (playing) {
				this.draw(dt);
				setTimeout(player, 16);
			}
		};
		
		this.play = () => {
			if (!playing) {
				lastTime = Date.now();
				playing = true;
				player();
			}
		};
		
		this.stop = () => {
			if (playing) playing = false;
		};
	}
	
	setSize(w, h) {
		this.ctx.canvas.width = w;
		this.ctx.canvas.height = h;
	}
	
	draw(dt) {
		this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.fillStyle = this.backgroundColor;
		this.ctx.fill();
		
		for (let i = 0; i < this.figures.length; i++) {
			let /*Object3D*/fig = this.figures[i];
			fig.tick(dt);
			fig.draw(this.ctx);
		}
	}
}
