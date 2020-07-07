function trace( ...args )
{
  const f = () =>
    args.forEach( o => {
      console.log( o )
      document.body.innerHTML += `<pre>${ o }</pre>`
    } )

  if ( document.readyState === "complete" )
    f()
  else
    window.addEventListener( `load`, f )
}

trace(`Henlo slops`);
