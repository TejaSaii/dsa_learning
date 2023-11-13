const sortArray = (arr) => {
    const mergeSort = (arr, l, r) => {
        if (l === r)
            return arr;

        let m = Math.floor((l + r)/2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);

        return arr;
    }

    return mergeSort(arr, 0, arr.length - 1);
}

const merge = (arr, L, M, R) => {
    let [a1, a2] = [ arr.slice(L, M + 1), arr.slice(M + 1, R + 1) ];
    let [i, j, k] = [ L, 0, 0 ];

    while (j < a1.length && k < a2.length) {
        if (a1[j] <= a2[k]) {
            arr[i] = a1[j];
            j++;
        }
        else {
            arr[i] = a2[k];
            k++;
        }
        i++;
    }

    while (j < a1.length) {
        arr[i] = a1[j];
        i++;
        j++;
    }

    while (k < a2.length) {
        arr[i] = a2[k];
        i++;
        k++;
    }
}


console.log(sortArray([5, 1, 1, 2, 0, 2]));
