export function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	// The maximum is inclusive and the minimum is inclusive
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// function that will generate result
export const getResult = (title: string, myNumbers: number[]) => {
	let total: number = 0;
	const mySet = new Set<number>();
	// you can make all this simple if u want to, i try to meake more explicite
	if (title === "Addition") {
		while (mySet.size < 3) {
			const randNber = getRandomIntInclusive(0, 3);
			if (mySet.has(randNber)) {
			} else {
				mySet.add(randNber);
				total += myNumbers[randNber];
			}
		}
		return total;
	}
	if (title === "Subtraction") {
		while (mySet.size < 3) {
			const randNber = getRandomIntInclusive(0, 3);
			if (mySet.has(randNber)) {
			} else {
				mySet.add(randNber);
				total -= myNumbers[randNber];
			}
		}
		return total;
	}
	total =1;
	if (title === "Multiplication") {
		
		while (mySet.size < 3) {
			const randNber = getRandomIntInclusive(0, 3);
			if (mySet.has(randNber)) {
			} else {
				mySet.add(randNber);
				total *= myNumbers[randNber];
			}
		}
		return total;
	}
// Division
	while (mySet.size < 3) {
		const randNber = getRandomIntInclusive(0, 3);
		if (mySet.has(randNber)) {
		} else {
			mySet.add(randNber);
			total *= myNumbers[randNber];
		}
	}
	return total;
};

