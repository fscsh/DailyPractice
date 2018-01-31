function romanToInt(s) {
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case 'M':
                arr[i] = 1000;
                break;
            case 'D':
                arr[i] = 500;
                break;
            case 'C':
                arr[i] = 100;
                break;
            case 'L':
                arr[i] = 50;
                break;
            case 'X':
                arr[i] = 10;
                break;
            case 'V':
                arr[i] = 5;
                break;
            case 'I':
                arr[i] = 1;
                break;
        }
    }
    var sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i]) {
            sum -= arr[i];
        } else {
            sum += arr[i];
        }
    }
    sum += arr[arr.length-1];
    return sum;
}
