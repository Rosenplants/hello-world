const _= {

    clamp(num,lowBound,upBound){
        let clampedNum = Math.max(num, lowBound);
        clampedNum = Math.min(clampedNum,upBound);
        return clampedNum;
    },

    inRange(num,start,end){
        if (typeof end === 'undefined'){
            end = start;
            start = 0;
        }

        if (start>end){
            let temp = end;
            end = start;
            start = temp;
        }

        if (num >= start && num < end){
            return true;
        } else{
            return false;
        }
    },

    words(string){
        /* //This is how I built it when I thought I was supposed to avoid built-in methods
        let strArr = [];
        let word = '';
        for(let i=0;i<string.length;i++){
            if(string[i]===' '){
                strArr.push(word);
                word = '';
            } else {
                word += string[i];
            }
        }
        strArr.push(word);
        return strArr;
        */
       //This is what you do if you aren't an idiot
        let strArr = string.split(' ');
        return strArr;
    },

    pad(string,len){
        let diff = len-string.length;
        let newString = '';
        if (diff <= 0){
            return string;
        }

        let buffer = ' '.repeat(Math.floor(diff/2));
        newString = buffer + string + buffer;
        if (diff%2 === 0){
            return newString;
        } else {
            return newString + ' ';
        }
    },

    has(obj,property){
        if (obj[property]){
            return true;
        } else {
            return false;
        }
    },

    invert(obj){
        const invertedObj = {}
        for (const property in obj){
            invertedObj[obj[property]]=property;
        }
        return invertedObj;
    },

    findKey(obj,func){
        for (const prop in obj){
            if (func(obj[prop])){
                return prop;
            } else {
                return undefined;
            }
        }
    },

    drop(arr,num=1){
        /*//My blind attempt
        let newArray = arr;
        for (let i = 0; i<num;i++){
            newArray.shift();
        }
        return newArray;
        */
       //The codecademy version:
       let newArray = arr.slice(num);
       return newArray;
    },

    dropWhile(arr,func){
        //my way
        let i=0;
        let newArray = arr;
        while (func(newArray[i],i,newArray)){
            newArray = this.drop(newArray);
        }
        return newArray;
        /*//codecademy way:
        let dropNumber = arr.findIndex((element,index) => {
            return !func(element,index,arr);
        })
        let newArray = this.drop(arr,dropNumber);
        return newArray;
        */
    },

    chunk(arr,size=1){
        /*//my blind way
        let newArray = [];
        let tempArray = [];
        for (let i=0;i<arr.length;i++){
            if (tempArray.length < size){
                tempArray.push(arr[i]);
            } else {
                newArray.push(tempArray);
                tempArray = [];
                tempArray.push(arr[i]);
            }
        }
        newArray.push(tempArray);
        return newArray;
        *///the codecademy way
        let newArray = [];
        for (let i=0;i<arr.length;i+=size){
            let arrayChunk = arr.slice(i,i+size);
            newArray.push(arrayChunk);
        }
        return newArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;