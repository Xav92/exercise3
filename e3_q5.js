// -a 

function listApply(list, f) {
    const result = [];
    
    for(let i = 0; i < list.length;i++){
        result.push(f(list[i]));
    }
    return result;
}


// -b

function cadToUsd(cad){
    const exchangeRate = 0.73;
    return cad * exchangeRate;
}

// -c

function cadsToUsds(cads){
    return listApply(cads,(cad) => cadToUsd(cad));
}

const amoutsInUs = cadsToUsds([1,2,3]);




// -d

const isOdd = (x) => x % 2 === 1;


const every = (arr,f) => arr.reduce((accumulator,currentValue) => {
    return accumulator && f(currentValue)
},true)




// -e

function assert(value, message) {
    if (!value) {
      throw new Error(message || "Assertion failed");
    }
  }
  
  function assertEquals(actual, expected, message) {
    if (actual != expected) {
      throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
  }
  
  function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
      throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
      throw new Error(
        message ||
          `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
      );
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        throw new Error(
          message ||
            `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
        );
      }
    }
  }

    // part-a

    try{
        assertListEquals(listApply([1, 2, 3], (x) => x + 1),[2, 3, 4] );
    }
    catch (e){
        console.log (e);
    }

    try{
        assertListEquals(listApply([2, 3, 4], (x) => x + 1),[3, 4, 6] );
    }
    catch (e){
        console.log (e);
    }

    

    // part-b
  
    try{
        assertEquals(cadToUsd(100),73);
    }
    catch (e){
        console.log (e);
    }

    try{
        assertEquals(cadToUsd(100),75);
    }
    catch (e){
        console.log (e);
    }

    // part-c

    try{
        assertListEquals(cadsToUsds([1,2,3]),[0.73,1.46,2.19])
    }
    catch (e){
        console.log (e);
    }

    try{
        assertListEquals(cadsToUsds([1,2,3]),[0.73,1.47,2.19])
    }
    catch (e){
        console.log (e);
    }


    // part-d


    try{
        assert(every([1, 3, 5], isOdd));
        }
        catch (e){
            console.log (e);
        }

    try{
        assert(every([1, 2, 3], isOdd));
        }
        catch (e){
            console.log (e);
        }