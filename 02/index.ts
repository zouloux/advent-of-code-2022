/**
 * Day 2 - 🌟
 * https://adventofcode.com/2022/day/2
 */

import { readFile } from "fs/promises"
import { computeRPSRoundScore, computeRPSTotalForRounds, TRPSRounds } from "./rock-paper-scissors";
import { expect } from "../_helpers/test";

// ----------------------------------------------------------------------------- TEST EXAMPLE

const exampleInput:TRPSRounds = [
	["A", "Y"], ["B", "X"], ["C", "Z"]
]

// Compute parts
expect( computeRPSRoundScore( exampleInput[0][0], exampleInput[0][1] ), 8 )
expect( computeRPSRoundScore( exampleInput[1][0], exampleInput[1][1] ), 1 )
expect( computeRPSRoundScore( exampleInput[2][0], exampleInput[2][1] ), 6 )

// Compute total
const totalForExample = computeRPSTotalForRounds( exampleInput )
expect( totalForExample, 15 )

// ----------------------------------------------------------------------------- PART 1

// Read and parse input
const input = await readFile('./input.txt', { encoding: "utf8" })
const rounds = input.split("\n").map( round => round.split(" ") ) as TRPSRounds

// Compute total - 🌟
const totalForInput = computeRPSTotalForRounds( rounds )
console.log(`Total part 1 : ${totalForInput}`)

// ----------------------------------------------------------------------------- PART 2
