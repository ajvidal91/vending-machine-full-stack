window.onload = function() {

  const pepsi = document.getElementById("pepsi");
  const coke = document.getElementById("coke");
  const dasani = document.getElementById("dasani");
  const up = document.getElementById("up");
  const fanta = document.getElementById("fanta");


  pepsi.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'pepsi'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  coke.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'coke'

        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  dasani.addEventListener('click', function() {

    fetch('dasani', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'dasani'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  up.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': '7up'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
  fanta.addEventListener('click', function() {
    fetch('orders', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'fanta'
        })
      })
      .then(response => {
        if (response.ok) return response.json()

      })
      .then(data => {

        window.location.reload() //page reload (another get request is triggered)
      })

  });
}
