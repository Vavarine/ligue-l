const MyScript = async (scenery, player) => {
  const response = await fetch('http://localhost:3333/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ scenery, player }),
  })
  const { move } = await response.json()

  console.log({ move })

  return move
}


export default MyScript