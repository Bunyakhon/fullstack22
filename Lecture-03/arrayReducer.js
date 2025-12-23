const arry = [15,16,17,18,19];

function reducer(accumulator, currentValue, index){
    const returns = accumulator + currentValue;
    console.log(
        `accmulator: ${accumulator},currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

arry.reduce(reducer);