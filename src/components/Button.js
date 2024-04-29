import React from 'react'

function Button({btnColor, increment, children, onClick}) {
  return (
    <div style = {{backgroundColor: ' rgb(230, 228, 226)', width: '400px', margin:'5px auto', padding:'10px', borderRadius:'20px'}}>

      <p>Mon boutton dans Button.js</p>
      <button className={'btn btn-' + btnColor} onClick = {onClick}> Boutton + %</button> {/** Pour className={'btn btn-' + btnColor}, dans le but de récupérer les valeur de la prop btnColor contenu dans le state de App.js, on peut aussi utiliser la concaténation des templates litérals comme ceci : className={`btn btn-${btnColor}`}*/}

    </div>
  )
}

export default Button
