function findLadders(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return [];
    }
    wordList.push(beginWord);
    list = new Set(wordList);
    bfs(beginWord, endWord, list, map = {}, nextMap = {});
    console.log('map = ',map);
    console.log('nextMap = ',nextMap);
    var totalstep = 0;
    totalstep = map[beginWord];
    // console.log('map = ', map);
    console.log(totalstep);
    return dfs(beginWord, endWord, list, map,nextMap,totalstep, [], [beginWord]);
}

function bfs(beginWord, endWord, list, map,nextMap) {
    map[endWord] = 1;
    let queue = [];
    queue.push(endWord);
    // console.log(' initial queue = ', queue);
    while (queue.length !== 0) {
        // console.log('');
        // console.log(' new nextMap = ',nextMap);
        let curword = queue.pop();
        let nextpath = helper(curword, list);
        // console.log('nextpath = ', nextpath);
        // console.log('curword',curword);
        for (let i = 0 ; i < nextpath.length; i++) {
            console.log('nextpath[i]',nextpath[i],'curword',curword);
            if (!(curword in nextMap)) {
                nextMap[curword] = [nextpath[i]];
                // console.log('nextMap[nextpath[i]]',nextMap[nextpath[i]]);
            }else {
                // console.log('nextMap[nextpath[i]]',nextMap[nextpath[i]]);
                nextMap[curword].push(nextpath[i]);
            }
            if (!(nextpath[i] in map)) {
                map[nextpath[i]] = map[curword] + 1;
                // map[nextpath[i]].push(nextpath[i])
                // console.log('map add ', map[nextpath]);
                queue.unshift(nextpath[i]);
                console.log('queue = ',queue);
            }
        }
    }
    // console.log('map = ', map,'nextMap = ',nextMap);
    // return map;
}


function helper(cur, list) {
    let res = [];
    for (let i = 0; i < cur.length; i++) {
        for (let j = 97; j <= 122; j++) {
            if (cur[i] !== String.fromCharCode(j)) {
                let newStr = cur.substring(0, i) + String.fromCharCode(j) + cur.substring(i + 1);
                if (list.has(newStr)) {
                    res.push(newStr);
                }
            }
        }
    }
    return res;
}

function dfs(beginWord, endWord, list, map, nextMap, totalstep, res, tmp) {
    console.log('endWord', endWord, 'beginWord', beginWord);
    if (endWord === beginWord) {
        console.log('***** equal');
        res.push(tmp.slice());
        return;
    } else {
        for (let i in map ) {
            console.log('i',i);
            if (map[i] === totalstep - 1 ) {
                console.log('nextMap[i]',nextMap[i]);
                if (nextMap[i].includes(beginWord)) {
                    console.log('includes');
                    let next = i;
                    tmp.push(next);
                    dfs(next, endWord, list, map, nextMap,totalstep - 1, res, tmp);
                    tmp.pop();
                }
            }
        }
    }
    return res;
}



let beginWord = "teach";
let endWord = "place";
let wordList = ["peale","wilts","place","fetch","purer","pooch","peace","poach","berra","teach","rheum","peach"];
// let beginWord = "hit";
// let endWord = "cog";
// let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(findLadders(beginWord, endWord, wordList));
