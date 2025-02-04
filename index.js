require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubdata = {
       "login": "Aditya282007",
       "id": 166129372,
       "node_id": "U_kgDOCebu3A",
       "avatar_url": "https://avatars.githubusercontent.com/u/166129372?v=4",
       "gravatar_id": "",
       "url": "https://api.github.com/users/Aditya282007",
       "html_url": "https://github.com/Aditya282007",
       "followers_url": "https://api.github.com/users/Aditya282007/followers",
       "following_url": "https://api.github.com/users/Aditya282007/following{/other_user}",
       "gists_url": "https://api.github.com/users/Aditya282007/gists{/gist_id}",
       "starred_url": "https://api.github.com/users/Aditya282007/starred{/owner}{/repo}",
       "subscriptions_url": "https://api.github.com/users/Aditya282007/subscriptions",
       "organizations_url": "https://api.github.com/users/Aditya282007/orgs",
       "repos_url": "https://api.github.com/users/Aditya282007/repos",
       "events_url": "https://api.github.com/users/Aditya282007/events{/privacy}",
       "received_events_url": "https://api.github.com/users/Aditya282007/received_events",
       "type": "User",
       "user_view_type": "public",
       "site_admin": false,
       "name": "Aditya",
       "company": null,
       "blog": "",
       "location": "India,Gujarat",
       "email": null,
       "hireable": null,
       "bio": null,
       "twitter_username": "Aditya28_2007",
       "public_repos": 1,
       "public_gists": 0,
       "followers": 0,
       "following": 2,
       "created_at": "2024-04-05T11:51:53Z",
       "updated_at": "2025-01-23T15:20:28Z"
     }

app.get('/', (req, res) => {
       res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
       res.send('Twitter')
})

app.get('/login',(req,res) => {
       res.send('<h1>please login here</h1>')
})

app.get('/youtube', (req,res) => {
       res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req,res) => {
       res.json(githubdata)
})

app.listen(process.env.PORT, () => {
       console.log(`Example app listening on port ${port}`)
})