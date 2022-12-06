

type IExpect = (a) => {
	toBeExactly( b )
	toBeSameArrayAs( b )
}

/**
 * Ultra compact test function.
 * Will stop program if any test fails.
 */
export function should ( name:string, handler: (expect:IExpect) => void ) {
	function error ( message:string, a, b ) {
		console.error(`Test ${name} failed. ${message}`)
		console.log(`a -> `, a)
		console.log(`b -> `, b)
		process.exit(1)
	}
	handler((a) => ({
		toBeExactly ( b ) {
			if ( a !== b )
				error(`${a} should be exactly equal to ${b}`, a, b)
		},
		toBeSameArrayAs ( b ) {
			if ( b.length !== a.length )
				error(`${a} should be the same array as ${b} ( not the same length )`, a, b)
			a.forEach( (v, i) => {
				if ( b[i] !== v )
					error(`${a} should be the same array as ${b} ( not the same values at index ${i} )`, a, b)
			})
		}
	}))
	console.log(`Test ${name} succeeded 👌`)
}