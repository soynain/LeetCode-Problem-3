var lengthOfLongestSubstring = function (s) {
    let substringBuilderTemp = "", longestIndexForNow, longestSubstrArr = [],i=0,indexStartSb=0;
    if (s.length === 0) {
        return 0;
    } else {
        while(i<s.length){
            if (!substringBuilderTemp.includes(s[i])) {
                substringBuilderTemp += s[i];
                if (i === s.length - 1) {
                    longestSubstrArr.push(substringBuilderTemp);
                } else {
                    if(indexStartSb==0)indexStartSb=i;  
                }
            } else {
                longestIndexForNow = substringBuilderTemp.length;
                longestSubstrArr.push(substringBuilderTemp);
                substringBuilderTemp = ""; 
                i=indexStartSb;
                if (s[i] !== s[i + 1]) substringBuilderTemp += s[i];
                indexStartSb=0;
            }
            i++;
        }
        return longestSubstrArr.reduce((a, b) => {
            return a.length > b.length ? a : b;
        }).length;
    }
};

console.log(lengthOfLongestSubstring('dvdf'))