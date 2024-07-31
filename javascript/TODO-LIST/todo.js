let input = prompt("what yould you like to do...");
const todos = ['collect chicken legs', 'clean litter box'];
while (input != 'quit' && input != 'q') {
    if (input === 'list') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************')
    } else if (input === 'new') {
        const newTodo = prompt("Enter what you want to add:");
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index you like to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.slice(index, 1);
            console.log(`okk,${deleted[0]} is deleted`);
        } else {
            console.log('Unknown index...');
        }
    }
    input = prompt("what yould you like to do...");
}
console.log("You quit the list....");