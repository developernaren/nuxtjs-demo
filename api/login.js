export default function (req, res, next) {

  const email = req.body.email || ''
  const password = req.body.password || ''

  const users = [
    { email : 'naren@dubicars.com', password: 'dubicars', name : "Naren", token : 'naren'},
    { email : 'riaz@dubicars.com', password: 'dubicars', name : "Riaz", token : 'riaz'},
    { email : 'salaam@dubicars.com', password: 'dubicars', name : "Salaam", token : 'salaam'},
    { email : 'darko@dubicars.com', password: 'dubicars', name : "Darko", token : 'darko'},
  ];

  const user = users.filter(user => user.email === email && user.password === password)

  if(user.length === 1){
    res.send(user[0])
    return
  }

  res.status(401).send({ message : 'Wong Username/Password'})

}
