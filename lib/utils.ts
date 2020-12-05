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

export function removeRepetition(poetList: any[]): any[] {
    const countries = poetList.map(item => {
        if (typeof item === 'object' && item.nationality) {
            return item.nationality
        }
        return
    })
    return Array.from(new Set(countries))
}

export function numToArr(start: number, end: number): number[] {
    const arr = []
    let i = start
    if (start > end) {
        return arr
    }
    while(i <= end) {
        arr.push(i++)
    }
    return arr
}