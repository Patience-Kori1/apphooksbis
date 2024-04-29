import React from 'react'

function Count({count, bgColor}) {

  const progress = {width: `${count}%`, borderRadius:'20px', color:'red'} //C'est pour récupérer la valeur de count  et l'assigner à width.Pour cela, on a utilisé l'interpolation.On aurait aussi utilisé la concaténation : progress = {width: count + '%'} et ne pas utiliser l'interpolation. Pour rappel, tous les deux sont des manière d'insérer des variables dans des chaines de caractères en js.
 
  return (
    <div style={{backgroundColor: 'pink', width: '600px', padding: '10px', margin: '5px auto', borderRadius:'20px'}}>
      
        <p className ="h4"> {count} % Mon P dans count.js</p>

        <div className="progress" style = {{backgroundColor:'pink'}}>
            <div className="progress-bar progress-bar-striped" role="progressbar" style= {progress}>   
            </div>
        </div>

    </div>
  )
}

export default Count

// handleClick =() => {
//   setCountOne (prevState => {
//     return (
//       {countOne.increment: + 1}
//     )
//   })
// }