import { Router } from 'express'
import bodyParser from 'body-parser'
const fireCloud = require('../config')
const db = fireCloud.firestore()
const router = Router()

router.use(bodyParser.json())

router.get('/patient', async (req, res) => {
  try {
    const response = await db.collection('patient').get()
    res.status(200)
    res.json({
      data: response.docs.map((doc:any) => doc.data())
    })
  } catch (error) {
    console.log(error)
    res.json({
      data: []
    })
  }

})

router.post('/patient', async (req, res) => {
  const {
    patientId,
    name,
    treatmentDate,
    cost,
    treatments,
    medications
  } = req.body
  
  try {
    await db.collection('patient').add({
      patientId,
      name,
      treatmentDate,
      cost,
      treatments,
      medications
    })
    res.status(201)
    res.json({
      message: 'Adding patient success',
    })
  } catch (error) {
    res.status(502)
    res.json({
      message: 'Something went wrong'
    })
  }
})

module.exports = router