//  7. Stack order and setTimeout

console.log("Start of the execution queue");
setTimeout(() => console.log("Final code block to be executed"), 0);
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
