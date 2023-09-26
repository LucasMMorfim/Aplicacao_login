import '../../MenuRegister/index.jsx'

function cadastrarUsuario(e) {
  e.preventDefault()
  console.log('dfds')
}


  // const userData = getDataForm()

  // sendDataAPI(userData)

// function getDataForm() {
//   const inputName = document.querySelector('.userName')
//   const inputEmail = document.querySelector('.userEmail')
//   const inputPassword = document.querySelector('.userPassword')
//   const inputConfirmPassword = document.querySelector('.userConfirmPassword')
//   if (inputName.value === null || inputEmail.value === null) {
//     console.log('campos vazios')
//     return
//   }

//   const userData = {
//     name: inputName.value,
//     email: inputEmail.value,
//     password: inputPassword.value,
//     confirmPassword: inputConfirmPassword.value
//   }
//   return userData
// }

// async function sendDataAPI(userData) {
//   try {
//     const response = await fetch('http://localhost:3333/register', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })

//     response.json().then((data) => 
//       document
//     )

//     if (response.status === 201) {
//       clean()
//       // window.location.href = '../@frontend/index.html'
//     } else {
//       console.log('erro to add user')
//     }
//   } catch (erro) {
//     console.error(erro)
//   }
// }

// function clean() {
//   document.querySelector('.userName').value = ''
//   document.querySelector('.userEmail').value = ''
//   document.querySelector('.userPassword').value = ''
//   document.querySelector('.userConfirmPassword').value = ''
// }
