

type IExpect = (a) => {
	toBeExactly( b )
}

/**
 * Ultra compact test function.
 * Will stop program if any test fails.
 */
export function should ( name:string, handler: (expect:IExpect) => void ) {
	handler((a) => ({
		toBeExactly ( b ) {
			if ( a !== b ) {
				console.error(`Test ${name} failed. ${a} should be ${b}`)
				process.exit(1)
			}
		}
	}))
	console.log(`Test ${name} succeeded 👌`)
}