const _ = {
    clamp(number, lower, upper) {
        const arr = [number, lower, upper];
        arr.sort(function (a, b) {
            return a - b
        });
        return arr[1];
    },
    inRange(num, s, e) {
        if (e === undefined) {
            e = s;
            s = 0;
        }

        if (num === s) {
            return true;
        }
        if (num === e) {
            return false;
        }
        if (s > e) {
            const temp = e;
            e = s;
            s = temp;
        }
        return num >= s && num <= e;
    },

    words(str) {
        return str.split(' ');
    },

    pad(str, len) {
        if (len <= str.length) {
            return str;
        }
        const length = len - str.length;
        let left = false;
        for (let i = 0; i < length; i++) {
            if (left) {
                str = " " + str;
            } else {
                str += " ";
            }
            left = !left;
        }
        return str;
    },
    has(obj, key) {
        return Object.keys(obj).includes(key);
    },

    invert(obj) {
       let invertedObject = {};
       for(let key in obj){
           const originalValue = obj[key];
           invertedObject = {originalValue : key}
       }
       return invertedObject;
    },

    findKey(obj, pre){
        for(const o in obj){
            if(pre(obj[o])){
                return o;
            }
        }
        return undefined;
    },

    drop(arr, num){
        if(num == undefined){
            num = 1;
        }
        for(let i = 0; i < num; i++){
            arr.shift();
        }
        return arr;
    },

    dropWhile(arr, pre){
        const c = (el, i) => {
            return !pre(el, i, arr);
        };
        let dn = arr.findIndex(c);
        let dropped = this.drop(arr, dn);
        return dropped;
    },

    chunk(arr, size){
        if(size == undefined) {
            size = 1;
        }
        let res = [];
        let c = 0;
        for(let i = 0; i < arr.length; i += size){
            let temp = [];
            for(let j = i; j < i + size && j < arr.length; j++){
                temp.push(arr[j]);
            }
            res.push(temp);
        }
        return res;
    }
}


//Empty object to represent our library containing all the functionality we add to it.



// Do not write or modify code below this line.
module.exports = _;