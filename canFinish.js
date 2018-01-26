function canFinish(numCourses,preequisites){
    var map = {};
    var arr = [];
    var queue = [];
    for (let i = 0; i < numCourses; i++) {
        arr.push(0);
    }
    console.log('map = ',map);
    for (var i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    for (let i = 0; i < preequisites.length; i++) {
        var pre = preequisites[i][1];
        var ready = preequisites[i][0];
        arr[ready] ++;
        console.log('arr = ',arr,'pre = ',pre);
        // map[pre] = [ready];
        map[pre].push(ready);
        console.log('map = ',map);

    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            var firstpre = i;
            queue.push(i);
        }
    }
    console.log('first queue = ',queue);
    console.log('');
    var count = 0;
    while (queue.length !== 0) {
        var tmp = queue.pop();
        count ++;
        var tmparr = map[tmp];
        console.log('tmparr**',tmparr);
        for (let i = 0; i < tmparr.length; i++) {
            console.log('arr[tmparr] = ',arr[tmparr]);
            if (arr[tmparr[i]] > 0) {
                console.log('now queue = ',queue);
                arr[tmparr[i]] --;
                if (arr[tmparr[i]] === 0) {
                    queue.unshift(tmparr[i]);
                }
                console.log('arr = ',arr);
            }
        }
        console.log('end queue = ',queue,'count = ',count);
        console.log('');
    }
    if (count === numCourses) {
        return true;
    }else {
        return false;
    }
}
let numCourses = 3;
let preequisites = [[2,0],[2,1]];
console.log(canFinish(numCourses,preequisites));
