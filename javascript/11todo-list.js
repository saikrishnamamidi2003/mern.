
const todolist = [ { name : 'make dinner',
   dueDate : '22-03-2024'},
   {
   name : 'wishes',
   dueDate : '25-05-2023'}
];
function renderTodo(){

   let todolisthtml = ' ';
   for(let i=0; i<todolist.length; i++){
      const todoobject = todolist[i];
      // const name = todoobject.name;
      // const dueDate = todoobject.dueDate;
      const {name, dueDate} = todoobject; //destructring

            const html = `<p>

      ${name} ${dueDate}
      <button onclick="
      todolist.splice(${i}, 1);
      renderTodo();
      ">delete</button>
      
      </p>`;

      todolisthtml += html;
   }

   console.log(todolisthtml);
   document.querySelector('.js-todo_list').innerHTML = todolisthtml;
}

const todoarray = [];
function todo(){
   const input_element = document.querySelector('.js-input');
   const name = input_element.value;
   const input_date = document.querySelector('.js-input-date');
   const dueDate = input_date.value;
   input_date.value = '';
   input_element.value = '';
   todolist.push(
      {
         // name : name,
         // dueDate : dueDate
         name,
         dueDate //if property and variable name is same we can also write like this
      }
   );
   renderTodo();
}