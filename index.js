// let fetch = require("node-fetch")
// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:"POST",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify({
//         userId: 5,
//         title: "AnitaB",
//         completed:true
//     })
// })
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// console.log('success', data);
// })
// .catch(function (error) {
// console.log('error', error);
// });


function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
     if (num > max_num) {
     // (Fill in the missing line here)
     }
     }
     return max_num;
     }