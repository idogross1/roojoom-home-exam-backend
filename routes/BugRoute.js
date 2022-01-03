const BUG_URL = '/data/bug'
const BugService = require('../services/BugService')

module.exports = (app) => {
  app.get(BUG_URL, (req, res, next) => {
    BugService.query(req.query)
      .then((bugs) => res.json(bugs))
      .catch(next)
  })

  app.post(BUG_URL, (req, res, next) => {
    var bug = req.body

    BugService.add(bug)
      .then((addedBug) => res.json(addedBug))
      .catch(next)
  })

  app.delete(`${BUG_URL}/:bugId`, (req, res, next) => {
    const bugId = req.params.bugId

    BugService.remove(bugId)
      .then((_) => {
        // console.log('delete res:', _)
        res.end()
      })
      .catch(next)
  })

  app.get(`${BUG_URL}/:bugId`, (req, res, next) => {
    const bugId = req.params.bugId

    BugService.getById(bugId)
      .then((bug) => res.json(bug))
      .catch(next)
  })

  app.put(BUG_URL, (req, res, next) => {
    var bug = req.body

    BugService.update(bug)
      .then((bug) => res.json(bug))
      .catch(next)
  })
}
