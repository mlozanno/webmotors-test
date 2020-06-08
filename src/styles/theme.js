export const base = 8;

export const pxToRem = (...valuesInPx) =>
	valuesInPx
		.map(value => (Number(value) ? `${value / 10}rem` : value))
		.join(` `);

export const spacing = value => pxToRem(value * base);

export const colors = {
	primary: `#f3123c`,
	lightGrey: `#f3f5f8`,
	grey: `#aaa`,
	darkGrey: `#4d4c59`,
};

export const fontSize = {
	regular: pxToRem(16),
};
