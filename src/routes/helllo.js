
const router = require('express').Router();

router.route('/').get((req, res) => {
  msg = `Hello ${req.query.name} || "World!" from get request.`
  res.json(msg)
})

router.route('/:lang').get((req, res) => {
  let msg = '';
  switch (req.params.lang) {
    case 'es':
      msg = 'Hola Mundo!';
      break;
    case 'en':
      msg = 'Hello World!';
      break;
    case 'fr':
      msg = 'Bonjour Monde!';
      break;
    default:
      msg = 'Hi Karl!';
      break;
  }
  res.json(msg)
});


router.route('/').post((req, res) => {
  const {
    body: {
      a,
      b
    } = {}
  } = req;
  const sum = parseInt(a) + parseInt(b);
  // const msg = `Hellow ${req.body.name || "World"} from post request!`
  res.json(sum)
});


module.exports = router;