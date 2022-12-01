import { readFile } from "fs/promises"

// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

const input = await readFile('./input.txt', { encoding: "utf8" })

// ----------------------------------------------------------------------------- PART 1

// Browse elves by splitting double line jumps
const elves = input.split("\n\n").map(
	// Browse values by splitting line jumps
	b => b.split("\n").reduce(
		// Add value of each line as a number
		(p, c) => p + parseInt( c, 10 ), 0
	)
)

// Browse all computed elves and extract the bigger one
const biggerElf = elves.reduce(
	(p, c) => c > p ? c : p, 0
)

console.log(`Part 1 : ${biggerElf}`) // 🌟

// ----------------------------------------------------------------------------- PART 2

const sortedElves = elves.sort( (a, b) => a > b ? -1 : +1 )
const topThreeElves = sortedElves.slice( 0, 3 )
const totalTopThreeElves = topThreeElves.reduce( (p, c) => p + c, 0 )

console.log(`Part 2 : ${totalTopThreeElves}`)