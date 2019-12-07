const { Excuse } = require('../models')

module.exports = app => {

  // GET all excuses (read)
  app.get('/excuses', (req, res) => {
    Excuse.findAll()
      .then(excuses => res.json(excuses))
      .catch(e => console.error(e))
  })

  // Get all excuses with severity (read)
  app.get('/excuses/:severity', (req, res) => {
    Excuse.findAll({ where: { severity: req.params.severity }})
      .then(excuses => res.json(excuses))
      .catch(e => console.log(e))
  })

  // POST one excuse (create)
  app.post('/excuses', (req, res) => {
    Excuse.create(req.body)
      .then(excuse => {
        res.json(excuse)
      })
      .catch(e => console.error(e))
  })

  // PUT one excuse (update)
  app.put('/excuses/:id', (req, res) => {
    Excuse.findOne({ where: { id: parseInt(req.params.id) } })
      .then(excuse => excuse.update({ isDone: !excuse.isDone}))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // DELETE one excuse (delete)
  app.delete('/excuses/:id', (req, res) => {
    Excuse.findOne({ where: { id: parseInt(req.params.id) } })
      .then(excuse => excuse.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
