const express = require('express')
const path    = require('path')
const app     = express()

app.use(express.static(__dirname))
app.get('/*path', (req,res)=>{
  res.sendFile(path.join(__dirname, '404.html'))
})
const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})