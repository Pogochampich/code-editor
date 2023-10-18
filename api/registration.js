const apiUrl = 'http://134.0.116.26:5551/api';

const userNameId = 'userName';
const userPasswordId = 'userPassword';
const submitId = 'submit';

const userName = document.getElementById(userNameId);
const userPassword = document.getElementById(userPasswordId);
const submit = document.getElementById(submitId)

console.log(submit)
submit.onclick = function(){
    registration(userName.value, userPassword.value);
}

async function registration(userName, passwordName){
    const user = {
        avatar: '',
        hash: passwordName,
        username: userName
      }

    let response = await fetch(`${apiUrl}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    console.log(response);
}

