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
    test("Group 2 - Test 1", async () =>{
        console.log ("Group 2 - Test 1 is Executing...");
    });

    test("Group 2 - Test 2", async () =>{
        console.log ("Group 2 - Test 2 is Executing...");
    });

});

test.beforeAll(async()=>{
console.log("Test For beforeAll");
});

test.afterAll(async()=>{
console.log("Test For afterAllAll");
});

test.beforeEach(async()=>{
console.log("Test For beforeEach");
});

test.afterEach(async()=>{
console.log("Test For afterEach");
});
