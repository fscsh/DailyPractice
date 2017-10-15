function removeInvalidParentheses(s) {
    if (s.length === 0) {
        return [""];
    }
    let left_remove = 0;
    let right_remove = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left_remove++;
        }
        if (s[i] === ')') {
            if (left_remove > 0) {
                left_remove--;
            } else {
                right_remove++;
            }
        }
    }

    let result =  helper(s, 0, left_remove, right_remove, tmp = '', res = [], pair = 0, judge = 0);
    // console.log('result' , result);
     map = new Set(result);
     result = Array.from(map);
     return result;
}

function helper(s, i, left_remove, right_remove, tmp, res, pair, judge) {
    // console.log('');
    // console.log('tmp = ', tmp);
    if (i === s.length) {
        // console.log('');
        if (left_remove === 0 && right_remove === 0 && judge === 0) {
            res.push(tmp);
            // console.log('res = ', res);
        }
        return;
    }
    if (s[i] !== '(' && s[i] !== ')') {
        // console.log('***', tmp);
        helper(s, i + 1, left_remove, right_remove, tmp + s[i], res, pair, judge);
    } else {
        if (s[i] === '(') {
            // console.log('(((****', 'i = ', i);
            if (left_remove > 0) {
                // console.log('enter left>0');
                helper(s, i + 1, left_remove - 1, right_remove, tmp, res, pair, judge);
            }
            // console.log('tmp +(', tmp);
            helper(s, i + 1, left_remove, right_remove, tmp + s[i], res, pair + 1, judge);

        }
        if (s[i] === ')') {
            // console.log(')))****', 'i = ', i);
            if (right_remove > 0) {
                // console.log('enter right>0');
                helper(s, i + 1, left_remove, right_remove - 1, tmp, res, pair, judge);
            }

            // console.log('tmp +)= ', tmp);
            if (pair > 0) {
                helper(s, i + 1, left_remove, right_remove, tmp + s[i], res, pair - 1, judge);

            } else {
                helper(s, i + 1, left_remove, right_remove, tmp + s[i], res, pair, judge + 1);

            }
        }
    }
    return res;
}

let s = "()()a))(()";
// let s = ''
console.log(removeInvalidParentheses(s));
