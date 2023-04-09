function superbowlWin(array) {
    const output = array.find(element => (element.result === 'W'));
    if (output === undefined) {
        return output;
    } else {
        return output.year;
    }
}
