const express = require('express')
const app = express()
const port = 3000

app.route('/customers')
  .get((req, res) => res.send('Customer List'))
  .post((req, res) => res.send('New Customer'))
  .put((req, res) => res.send('Change Customer'))
  .delete((req, res) => res.send('Delete Customer'))

app.listen(port, () => { console.log(`App running on port ${port}`) })
