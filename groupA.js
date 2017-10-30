function groupAnagrams(strs) {
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        let tmp = strs[i].split('').sort().join('');
        arr.push(tmp);
    }
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]].push(strs[i]);
        } else {
            map[arr[i]] = [strs[i]];
        }
    }
        let res = [];
        for (let i in map) {
            res.push(map[i]);
        }
        console.log(map);
        return res;
}
