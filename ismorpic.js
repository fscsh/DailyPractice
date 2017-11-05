function isIsomorphic(s,t){
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    let map2 = {};
    for(let i = 0;i<s.length;i++){
        if (s[i] !== t[i]) {
            if (s[i] in map) {
                if (t[i] !== map[s[i]]) {
                    return false;
                }
            }else {
                if (t[i] in map2) {
                    return false;
                }
                map[s[i]] = t[i];
                map2[t[i]] = s[i];
            }
        }else {
            console.log('map[s[i]]', map[s[i]],'map2[t[i]]',map2[t[i]]);
            if ((t[i] in map2 && t[i]!== map2[t[i]])|| (s[i] in map && s[i] !== map[s[i]]) ) {
                return false;
            }
            map[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
    }
    console.log(map,map2);
    return true;
}
