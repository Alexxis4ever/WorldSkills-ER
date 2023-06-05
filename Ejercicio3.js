// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// DESCRIPCIÓN:
// Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, la suma de todos sus elementos. Agradeceré tu ayuda.
// PD Cada matriz incluye solo números enteros. La salida también es un número.

function arrayPlusArray() {

    const arr1 = [1,2,3,4,5];
    const arr2 = [4,1,3,4,5];
    
    const arr3 = []

    for (let i = 0; i < arr3.length; i++) {
        arr3.push(arr1[i]+arr2[i]);
    }

    return arr3;
}

console.log(arrayPlusArray());

