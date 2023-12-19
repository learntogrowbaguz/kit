/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params, parent }) {
	const data = await parent();
	return {
		message: `${data.message} + new`,
		x: params.x,
		y: params.y
	};
}
