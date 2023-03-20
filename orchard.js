///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0
for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i]
}
console.log(totalAcres)

//For this problem I decided that it would work best to form a for loop for each of the arrays that would add all the acres of each of the type of apple. I feel that this was the easiest and best way to handle the assignement.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
var averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)

//This problem was a simple one. Just used the build in math feature to devide the total acres by 7 to get the average. Then a Console log to see what the total was. 


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days)

// for this problem i created a 'while' loop that would would subtract the average picked every day by the total acres left. The loop ran as long as the total acres left was more than 0.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

for (let i = 0; i < fujiTons.length; i++) {
    fujiTons[i] = fujiAcres[i] * 6.5
}
console.log(fujiTons)

for (let i = 0; i < galaTons.length; i++) {
    galaTons[i] = galaAcres[i] * 6.5
}
console.log(galaTons)

for (let i = 0; i < pinkTons.length; i++) {
    pinkTons[i] = pinkAcres[i] * 6.5
}
console.log(pinkTons)

//For this problem I created another array for each of the types of apple. Once the array was complete, I then created a for loop that would multiply the values of the acres and store the value as tons. I am sure there is a more efficient way to complere this task, this is however the only way I could make it work.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =
let fujiPounds = fujiTons.slice()
let sum_1 = fujiPounds.reduce(function(sum_1, i) {
    return sum_1 + i
})

let galaPounds = galaTons.slice()
let sum_2 = galaPounds.reduce(function(sum_2, i) {
    return sum_2 + i
})

let pinkPounds = pinkTons.slice()
let sum_3 = pinkPounds.reduce(function(sum_3, i) {
    return sum_3 + i
})
console.log(sum_1)
console.log(sum_2)
console.log(sum_3)

//For this problem I struggled. I created new arrays and then valued each final value as a sum. This was a solution that I found researching, again, Im sure there is a much easier way to make this work. For some reason I could not get the values of the array to add together. At first I attempted a for loop. When I was unable to get the loop working I decided to try something else. I got a solution but not a clean one.


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

 let fujiProfit = sum_1 * fujiPrice
 let galaProfit = sum_2 * galaPrice
 let pinkProfit = sum_3 * pinkPrice
fujiProfit = sum_1 * fujiPrice
galaProfit = sum_2 * galaPrice
pinkProfit = sum_3 * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)


//For this problem I used the sum values from above and multiplied those values by the price per pound. Console log for the results.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalprofit = fujiProfit + galaProfit + pinkProfit
console.log(totalprofit)

//This problem was simple. Just created a new variable called totalprofit and used it to store the summed values of the three profit values for each of the types of apple. 