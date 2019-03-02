export default function (req, res, next) {

  const token = req.header('authorization').split(' ')[1]

  const users = [
    { email : 'naren@dubicars.com', password: 'dubicars', name : "Naren", token : 'naren'},
    { email : 'riaz@dubicars.com', password: 'dubicars', name : "Riaz", token : 'riaz'},
    { email : 'salaam@dubicars.com', password: 'dubicars', name : "Salaam", token : 'salaam'},
    { email : 'darko@dubicars.com', password: 'dubicars', name : "Darko", token : 'darko'},
  ];

    const [user] = users.filter(user => user.token === token)

    res.send({ data : user})
}
