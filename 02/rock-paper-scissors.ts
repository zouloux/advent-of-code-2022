
// ----------------------------------------------------------------------------- COMMON

export type TRPSRounds = [string, string][]

const shapeScore = {
	/**
	 * A : Rock
	 * B : Paper
	 * C : Scissors
	 */
	'A': 1,
	'B': 2,
	'C': 3,
}

// Convert X Y Z to A B C
const convertPlayer2Shapes = ( shape:string ) => String.fromCharCode( shape.charCodeAt(0) - 23 )

// Get vs score
const getVSScore = ( shape1:string, shape2:string ) => {
	// Tie draw
	if ( shape1 === shape2 )
		return 3
	// Check if player 2 wins
	const player2Wins = (
		// - ROCK VS SCISSORS
		( shape2 === "A" && shape1 === "C" ) ||
		// - PAPER VS ROCK
		( shape2 === "B" && shape1 === "A" ) ||
		// - SCISSORS VS PAPER
		( shape2 === "C" && shape1 === "B" )
	)
	return player2Wins ? 6 : 0
}

// Get round score ( vs score + shape score )
export const computeRPSRoundScore = ( shape1:string, shape2:string ) => {
	return getVSScore( shape1, shape2 ) + shapeScore[ shape2 ]
}

// ----------------------------------------------------------------------------- PART 1 SOLVER

export function computeRPSTotalForPart1 ( rounds:TRPSRounds ) {
	return rounds.reduce( (p, round) => {
		const [ shape1, shape2 ] = round
		const patchedShape2 = convertPlayer2Shapes( shape2 )
		return p + computeRPSRoundScore( shape1, patchedShape2 )
	}, 0)
}

// ----------------------------------------------------------------------------- PART 2 SOLVER

const lose = {
	'A' : 'C',
	'B' : 'A',
	'C' : 'B',
}
const win = {
	'A' : 'B',
	'B' : 'C',
	'C' : 'A',
}
export function computeRPSTotalForPart2 ( rounds:TRPSRounds ) {
	return rounds.reduce( (p, round) => {
		const [ shape1, code ] = round
		let shape2
		// Lose
		if ( code === "X" )
			shape2 = lose[ shape1 ]
		// Draw
		else if ( code === "Y" )
			shape2 = shape1
		// Win
		else if ( code === "Z")
			shape2 = win[ shape1 ]
		// Compute
		return p + computeRPSRoundScore( shape1, shape2 )
	}, 0)
}

