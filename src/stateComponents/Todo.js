import React, {useState} from 'react';

const Todos = () => {

    const [todos, setTodos] = useState(
        [
            { id:1, todo:"Manger  un sandwich"}, 
            { id:2, todo:"Boire une bière"}, 
        ]
    )


    return (
        <div>
            <h1>Liste des éléments :</h1>
      <ul>
        {todos.map((todoListe) => (
          <li key={todoListe.id}> {todoListe.id}. {todoListe.todo} </li>
         
        ))}
      </ul>

        </div>
    )
}

export default Todos;


