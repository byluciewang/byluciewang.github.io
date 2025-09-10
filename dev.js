const express = require('express')
const path    = require('path')
const app     = express()

// Serve static files from the 'public' directory
app.use(express.static(__dirname))
app.get('/*path', (req,res)=>{
  res.sendFile(path.join(__dirname, '404.html'))
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})