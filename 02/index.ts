/**
 * Day 2 - 🌟
 * https://adventofcode.com/2022/day/2
 */

import { readFile } from "fs/promises"
import { computeRPSTotalForPart2, computeRPSTotalForPart1, TRPSRounds } from "./rock-paper-scissors";
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

// Test total
should("Part 1 - total", expect => {
	const totalForExample = computeRPSTotalForPart1( exampleInput )
	expect( totalForExample ).toBeExactly( 15 )
});

// ----------------------------------------------------------------------------- PART 1 - RUN
// Compute total - 🌟
const totalForInputPart1 = computeRPSTotalForPart1( rounds )
console.log(`Total part 1 : ${totalForInputPart1}`)

// ----------------------------------------------------------------------------- PART 2 - TEST
should("Part 2", expect => {
	expect( computeRPSTotalForPart2(exampleInput) ).toBeExactly( 12 )
})

// ----------------------------------------------------------------------------- PART 2 - RUN
// Compute total - 🌟
const totalForInputPart2 = computeRPSTotalForPart2( rounds )
console.log(`Total part 2 : ${totalForInputPart2}`)

// ----------------------------------------------------------------------------- TEST RESULTS
// Test validated results for refacto
should("Results", expect => {
	expect( totalForInputPart1 ).toBeExactly( 8392 )
	expect( totalForInputPart2 ).toBeExactly( 10116 )
})
