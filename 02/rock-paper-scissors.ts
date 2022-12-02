
/**
 * A : Rock
 * B : Paper
 * C : Scissors
 *
 * X : Rock
 * Y : Paper
 * Z : Scissors
 */

const shapeScore = {
	'A': 1,
	'B': 2,
	'C': 3,
	'X': 1,
	'Y': 2,
	'Z': 3,
}

const isDraw = ( shape1:string, shape2:string ) => {
	return (
		shape1 === 'A' && shape2 === 'X'
		|| shape1 === 'B' && shape2 === 'Y'
		|| shape1 === 'C' && shape2 === 'Z'
	)
}

const getVSScore = ( shape1:string, shape2:string ) => {
	// console.log(getVSScore, shape1, shape2)
	// Tie draw
	if ( isDraw(shape1, shape2) )
		return 3
	// Check if player 2 wins
	const player2Wins = (
		// - ROCK VS SCISSORS
		( shape2 === "X" && shape1 === "C" ) ||
		// - PAPER VS ROCK
		( shape2 === "Y" && shape1 === "A" ) ||
		// - SCISSORS VS PAPER
		( shape2 === "Z" && shape1 === "B" )
	)
	return player2Wins ? 6 : 0
}

export const computeRPSRoundScore = ( shape1:string, shape2:string ) => {
	return getVSScore( shape1, shape2 ) + shapeScore[ shape2 ]
}

export type TRPSRounds = [string, string][]

export function computeRPSTotalForRounds ( rounds:TRPSRounds ) {
	return rounds.reduce( (p, round) => {
		const [ shape1, shape2 ] = round
		const roundScore = computeRPSRoundScore( shape1, shape2 )
		// console.log( shape1, shape2, roundScore );
		return p + roundScore
	}, 0)
}



export function computeRPSTotalForCodedRound ( rounds:TRPSRounds ) {
	return rounds.reduce( (p, round) => {
		const [ shape1, code ] = round

		// Lose
		let shape2
		if ( code === "X" ) {
			shape2 = (
				shape1 === "A" ? "Z"
				: shape1 === "B" ? "X"
				: shape1 === "C" ? "Y" : null
			)
		}
		// Draw
		else if ( code === "Y" ) {
			shape2 = (
				shape1 === "A" ? "X"
				: shape1 === "B" ? "Y"
				: shape1 === "C" ? "Z" : null
			)
		}
		// Win
		else if ( code === "Z") {
			shape2 = (
				shape1 === "A" ? "Y"
				: shape1 === "B" ? "Z"
				: shape1 === "C" ? "X" : null
			)
		}

		const roundScore = computeRPSRoundScore( shape1, shape2 )
		// console.log( shape1, code, shape2, roundScore );
		return p + roundScore
	}, 0)
}



