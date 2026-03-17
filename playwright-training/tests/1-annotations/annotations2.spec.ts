import { test, expect } from '@playwright/test';

test.describe("Group 1 - Tests", async () => {

    //test refers individual test case
    test("Group 1 - Test 1",{tag:'@smoke'}, async () => {
        console.log("Group 1 - Test 1 is Executing...");
        //expect(1).toBe(2);
    });

    test("Group 1 - Test 2",{tag:'@smoke'}, async () => {
        //test.slow();
        console.log("Group 1 - Test 2 is Executing...");
        //await new Promise(resolve => setTimeout(resolve, 40000));
    });

});

test.describe("Group 2 - Tests", async () => {

    //test refers individual test case for grpup 2
    test("Group 2 - Test 1",{tag:'@smoke'}, async () =>{
        console.log ("Group 2 - Test 1 is Executing...");
    });

    test("Group 2 - Test 2", async () =>{
        console.log ("Group 2 - Test 2 is Executing...");
    });

});

test.describe("Group 3 - Tests",async()=>{
//test refers individual test case for grpup 3
    test.skip("Group 3 - Testcase 1",{tag:'@smoke'},async()=>{
        {
            console.log("Group 3 - Testcase 1 is executing");
        };
    });
});

test.describe("Group 4 - Tests",async()=>{
//test refers individual test case for grpup 3
    test("Group 4 - Testcase 1",{tag:'@smoke'},async()=>{
        {
            //test.setTimeout(90000);
            console.log("Group 4 - Testcase 1 is executing");
            //await new Promise(resolve => setTimeout(resolve, 40000));
        };
    });
});

test.describe("Group 5 - Tests", async () => {

    //test refers individual test case
    test("Group 5 - Test 1", async () => {
        console.log("Group 1 - Test 1 is Executing...");
        //expect(1).toBe(2);
    });

    test("Group 5 - Test 2",{tag:['@smoke','@regression']}, async () => {
                console.log("Group 1 - Test 2 is Executing...");
    });

});

test.describe("Group 6 - Tests",{tag:'@regression'}, async () => {

    //test refers individual test case for grpup 2
    test("Group 6 - Test 1",{tag:'@regression'}, async () =>{
        console.log ("Group 2 - Test 1 is Executing...");
    });

    test("Group 6 - Test 2",{tag:'@regression'}, async () =>{
        console.log ("Group 2 - Test 2 is Executing...");
    });

});

test.describe("Group 7 - Tests",{tag:'@sanity'},async()=>{
//test refers individual test case for grpup 3
    test.skip("Group 7 - Testcase 1",async()=>{
        {
            console.log("Group 3 - Testcase 1 is executing");
        };
    });
});

test.describe("Group 8 - Tests",async()=>{
//test refers individual test case for grpup 3
    test("Group 8 - Testcase 1",{tag:'@sanity'},async()=>{
        {
            //test.setTimeout(90000);
            console.log("Group 4 - Testcase 1 is executing");
            //await new Promise(resolve => setTimeout(resolve, 40000));
        };
    });
});