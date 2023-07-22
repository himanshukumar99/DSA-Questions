var isValid = function(s) {
    const stack = [];
    const open = {'(': ')', '{':'}', '[':']'};
    for(let char of s){
        if (open[char]){
            stack.push(char);
        }else{
            const lastOpen = stack.pop();
            if(open[lastOpen]!= char){
                return false;
            }
        }
    }
    return stack.length === 0;
};