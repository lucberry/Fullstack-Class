let result = []
for (let i = 0; i < inputArray.length; i++) {
    const currentElement = inputArray[i]
    const isOdd = currentElement % 2 !== 0;
    if (isOdd) (
        result.push(currentElement);
    )
}