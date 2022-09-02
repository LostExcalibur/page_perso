function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('display', 'block');
	// fullscreen(true);
	pixelDensity(1);
	noLoop();
}

function draw() {
	background(0);
	loadPixels();

	const maxIterations = 300;
	const w = 4;
	const h = (w * height) / width;

	const xmin = -w / 2;
	const ymin = -h / 2;

	const xmax = xmin + w;
	const ymax = ymin + h;

	const dx = (xmax - xmin) / (width);
	const dy = (ymax - ymin) / (height);

	let y = ymin
	for (let j = 0; j < height; j++) {
		let x = xmin;
		for (let i = 0; i < width; i++) {
			let re = x;
			let im = y;
			let iter = 0;

			while (iter < maxIterations) {
				const re2 = re * re;
				const im2 = im * im;
				const ab2 = 2 * re * im;

				re = re2 - im2 + x;
				im = ab2 + y;

				if (re2 + im2 > 4)
					break;

				iter++;
			}

			const norm = map(iter, 0, maxIterations, 0, 1);
			let bright = map(sqrt(norm), 0, 1, 255, 0);
			const pixel = (i + j * width) * 4;

			pixels[pixel] = bright;
			pixels[pixel + 1] = bright;
			pixels[pixel + 2] = bright;
			pixels[pixel + 3] = 255;

			x += dx;
		}
		y += dy;
	}

	updatePixels();
}