export function getSomeRandom (arr: [], need: number): any[] {
    if (arr.length < need ) {
        return arr
    }else {
        let result = [];
        while (result.length < need) {
           let index = Math.floor(Math.random() * arr.length);
           if (result.indexOf(arr[index]) < 0) {
               result.push(arr[index]);
           }
        }
        return result;
    }
}