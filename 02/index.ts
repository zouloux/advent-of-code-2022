/**
 * Day 2 - 🌟
 * https://adventofcode.com/2022/day/2
 */

import { readFile } from "fs/promises"
import { computeRPSRoundScore, computeRPSTotalForCodedRound, computeRPSTotalForRounds, TRPSRounds } from "./rock-paper-scissors";
import { should } from "../_helpers/test";

// ----------------------------------------------------------------------------- INPUTS
// Read and parse input
const input = await readFile('./input.txt', { encoding: "utf8" })
const rounds = input.split("\n").map( round => round.split(" ") ) as TRPSRounds

// Example input
const exampleInput:TRPSRounds = [
	["A", "Y"], ["B", "X"], ["C", "Z"]
]

// ----------------------------------------------------------------------------- PART 1 - TEST

// Test parts
should("Part 1 - rounds", expect => {
	expect( computeRPSRoundScore( exampleInput[0][0], exampleInput[0][1] ) ).toBeExactly( 8 )
	expect( computeRPSRoundScore( exampleInput[1][0], exampleInput[1][1] ) ).toBeExactly( 1 )
	expect( computeRPSRoundScore( exampleInput[2][0], exampleInput[2][1] ) ).toBeExactly( 6 )
})

// Test total
should("Part 1 - total", expect => {
	const totalForExample = computeRPSTotalForRounds( exampleInput )
	expect( totalForExample ).toBeExactly( 15 )
});

// ----------------------------------------------------------------------------- PART 1 - RUN
// Compute total - 🌟
const totalForInput = computeRPSTotalForRounds( rounds )
console.log(`Total part 1 : ${totalForInput}`)

// ----------------------------------------------------------------------------- PART 2 - TEST

// Just test the grand total without testing parts
should("Part 2", expect => {
	expect( computeRPSTotalForCodedRound(exampleInput) ).toBeExactly( 12 )
})

// ----------------------------------------------------------------------------- PART 2 - RUN
// Compute total - 🌟
const totalForInputPart2 = computeRPSTotalForCodedRound( rounds )
console.log(`Total part 2 : ${totalForInputPart2}`)