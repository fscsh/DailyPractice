function findAnagrams(s, p) {
    s = s.split('');
    p = p.split('');
    let map = {};
    let res = []
    for (let i = 0; i < p.length; i++) {
        if (p[i] in map) {
            map[p[i]]++;
        } else {
            map[p[i]] = 1;
        }
    }
    console.log(map);
    let i = 0;
    while (i < s.length) {
        console.log('i = ', i,'s[i]',s[i]);
        if (s[i] in map) {
            let tmp = p.slice();
            console.log('enter check', 'tmp = ', tmp,'**s[i] = ',s[i],'p.length',p.length);
            for (let j = i; j < i+p.length; j++) {
                console.log('enter forloop');
                console.log('now j = ',j,'s[j] = ',s[j]);
                if (tmp.includes(s[j])) {
                    console.log('s[j]', s[j]);
                    tmp.splice(tmp.indexOf(s[j]),1).slice();
                    console.log('tmp now =', tmp);
                } else {
                    break;
                }
            }
            if (tmp.length === 0) {
                res.push(i);
                console.log('res = ',res);
                console.log('');
            }
        }
        i++;
    }
    return res;
}
