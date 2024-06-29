function submit()
{
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmpassword = document.getElementById('confirmpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password,confirmpassword)

}

function checkusername(username)
{
    if(username.length > 7)
        {
            document.getElementById('username').classList.add('success')
            document.getElementById('username').classList.replace('error','success')
            document.getElementById('username_error').innerHTML=''
        }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 characters long'
    }
}

function checkemail(email)
{
    if(email.length > 8 && email.includes('@gmail'))
        {
            document.getElementById('email').classList.add('success')
            document.getElementById('email').classList.replace('error','success')
            document.getElementById('email_error').innerHTML=''
        }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='email must include @gmail'
    }
}

function checkpassword(password)
{
    if(password.length > 7)
        {
            document.getElementById('password').classList.add('success')
            document.getElementById('password').classList.replace('error','success')
            document.getElementById('password_error').innerHTML=''
        }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='password must be 8 characters long'
    }
}

function checkpasswordmatch(password,confirmpassword)
{
    if(password!='' && password==confirmpassword)
        {
            document.getElementById('confirmpassword').classList.add('success')
            document.getElementById('confirmpassword').classList.replace('error','success')
            document.getElementById('confirmpassword_error').innerHTML=''
        }
    else{
        document.getElementById('confirmpassword').classList.add('error')
        document.getElementById('confirmpassword_error').innerText='passwords are not matching'
    }
}