import sum from "../src/components/sum"

test("sum function should calculate the some of two numbers", ()=>{
    const result = sum(3, 4)
    
    // Assertion
    expect(result).toBe(7)
})