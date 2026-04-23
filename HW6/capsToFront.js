function capsToFront(word) {
    const capitals = word.match(/[A-Z]/g) || [];
    const lowercases = word.match(/[a-z]/g) || [];
    return capitals.join('') + lowercases.join('');
}

export default capsToFront;