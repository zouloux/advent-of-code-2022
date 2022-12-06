/**
 * Day 3 - 🌟🌟
 * https://adventofcode.com/2022/day/2
 */

import { readFile } from "fs/promises"
import { should } from "../_helpers/test";

// ----------------------------------------------------------------------------- INPUTS

const exampleInput = await readFile("./example.txt", { encoding: 'utf8' })
const exampleLines = exampleInput.split("\n")

const input = await readFile("./input.txt", { encoding: 'utf8' })
const inputLines = input.split("\n")

// ----------------------------------------------------------------------------- LIB

const getSacksPriorities = ( sharedTypes:string[] ) =>
	sharedTypes.map( t => {
		const charCode = t.charCodeAt(0)
		return (
			// Uppercase -> 27 to 52
			( charCode <= 90 )
			? charCode - 65 + 27
			// Lowercase -> 1 to 26
			: charCode - 96
		)
	})

const getSacksSharedType = ( sacks:string[] ) =>
	sacks.map( sack => {
		// Split sacks in half and split letters
		const halfIndex = ~~(sack.length / 2)
		const lettersInParts = [
			sack.substring(0, halfIndex),
			sack.substring(halfIndex, sack.length),
		].map( p => p.split("") )
		// Find the common char in both sacks
		return lettersInParts[0].find(
			l => lettersInParts[1].indexOf( l ) !== -1
		)
	})

const arraySum = (array:number[]) => array.reduce((p, i) => p + i, 0)

const groupBy = ( array:any[], by:number ) => {
	const groups = []
	for ( let i = 0; i < array.length; i += by )
		groups.push( array.slice(i, i + by) )
	return groups
}

// ----------------------------------------------------------------------------- PART 1 - EXAMPLE
should("Part 1 - Example", expect => {
	// Test shared types from all sacks
	const sharedTypes = getSacksSharedType( exampleLines )
	expect( sharedTypes ).toBeSameArrayAs(['p', 'L', 'P', 'v', 't', 's'])
	// Test priorities
	const priorities = getSacksPriorities( sharedTypes )
	expect( priorities ).toBeSameArrayAs([16, 38, 42, 22, 20, 19])
	// Test total
	const total = arraySum( priorities )
	expect( total ).toBeExactly( 157 )
})

// ----------------------------------------------------------------------------- PART 1 - RUN
function part1 () {
	const sharedTypes = getSacksSharedType( inputLines )
	const priorities = getSacksPriorities( sharedTypes )
	return arraySum( priorities )
}
// Part 1 - 🌟
console.log(`Part 1 : ${part1()}`);

// ----------------------------------------------------------------------------- PART 2 - LIB
// Find badges from lines
function findBadges ( lines:string[]) {
	// Group sacks in pack of 3
	const groups = groupBy( lines, 3 ).map( g => g.map( s => s.split("") ))
	// Get all badges from groups of 3 sacks
	return groups.map( group => {
		let foundLetter:string
		// Find the letter in common in all 3 sacks of this group
		group.forEach( (sack, sackIndex) => {
			if ( foundLetter ) return
			sack.forEach( letter => {
				let sackOffset = 1
				while ( true ) {
					const nextSack = group[ sackIndex + sackOffset ]
					if ( !nextSack ) {
						foundLetter = letter
						break;
					}
					if ( nextSack.indexOf(letter) === -1 )
						break;
					++sackOffset
				}
			})
		})
		return foundLetter
	})
}

// ----------------------------------------------------------------------------- PART 2 - EXAMPLE
should("Part 2 - Example", expect => {
	const badges = findBadges( exampleLines )
	expect( badges ).toBeSameArrayAs(['r', 'Z'])
})

// ----------------------------------------------------------------------------- PART 2 - RUN
function part2 () {
	const badges = findBadges( inputLines )
	return arraySum( getSacksPriorities( badges ) )
}
// Part 2 - 🌟
console.log(`Part 2 : ${part2()}`);
