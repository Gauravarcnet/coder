function kadane_algo(a) {
    let max_so_far = Number.MIN_VALUE;
    let max_ending_here = 0, start = 0, end = 0, s = 0;

    for (i = 0; i < a.length-1; i++) { //[1,2,-1,2,-3,2,-5]
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    console.log("Maximum contiguous sum is " + max_so_far);
    console.log("Starting index " + start);
    console.log("Ending index " + end);
    return {max_so_far: max_so_far, "array" : [start, end]}
    
}
console.log("kadane_algo>>>", kadane_algo([1,2,-1,2,-3,2,-5]));

function kadane_algo_string(a) {
    let max_so_far = "";
    let max_ending_here = a[0], start = 0, end = 0, s = 0;

    for (i = 0; i < a.length-1; i++) { //[1,2,-1,2,-3,2,-5]
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    console.log("Maximum contiguous sum is " + max_so_far);
    console.log("Starting index " + start);
    console.log("Ending index " + end);
    return {max_so_far: max_so_far, "array" : [start, end]}
    
}