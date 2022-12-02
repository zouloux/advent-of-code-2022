



export function expect (a, b) {
	if ( a !== b ) {
		console.error(`Invalid ${a} should be ${b}`)
		process.exit(1)
	}
}