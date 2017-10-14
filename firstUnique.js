function firstUniqChar(s) {
    let map = {};
    for (let str of s) {
        if (str in map) {
            map[str] += 1;
        } else {
            map[str] = 1;
        }

    }
    console.log(map);
    for (let key in map) {
        if (map[key] === 1) return s.indexOf(key);
    }
    return null;
}
