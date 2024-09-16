//Let's make a todo list that works only in the terminal 

let todoList = [];
let choose ='';
choose = prompt('what would you do ? (new , list , delete or quit)').toLowerCase().trim();
while (choose !== 'quit') {
    if (choose == 'new'){
        let newTodo = prompt('what the new to-do ? ');
        todoList.push(newTodo);
    } else if (choose == 'list'){
        console.log('*** LIST ***');
        for (let i = 0; i < todoList.length; i ++) { //attention si je fais i+=todoList c'est mauvais car on veut juste parcourir le tableau de plus ce n'est pas un nombre
            console.log(`${i + 1} . ${todoList[i]}`)
            };
    } else if (choose == 'delete'){
        let indexDel = parseInt(prompt(`number ?`))
        while (isNaN(indexDel)|| indexDel <=0 || indexDel < length){
            alert('please enter a number of your list ') 
            indexDel = parseInt(prompt(`number ?`))
        }
        todoList = todoList.splice(indexDel - 1);

    } else {
        alert('i dont understand please try again')
    }
    choose = prompt('what would you do ? (new , list , delete or quit)').toLowerCase().trim(); 
};
