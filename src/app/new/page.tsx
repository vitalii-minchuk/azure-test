'use client'

export default function New() {
 
  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
  }
  return (
    <>
      <div>New</div>
      <button className="mt-3 p-2 border rounded-lg" onClick={fetchData}>fetch</button>
    </>
  )
}
