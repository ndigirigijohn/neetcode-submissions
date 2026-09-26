class Solution {
    encode(strs) {
        let result = "";
        for (const s of strs) {
            result += `${s.length}#${s}`;
        }
        return result;
    }

    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const length = Number(str.slice(i, j));
            const start = j + 1;
            const end = start + length;
            result.push(str.slice(start, end));
            i = end;
        }
        return result;
    }
}