const router=require('express').Router()
const regc=require('../controllers/regcontroller')
const parkingc=require('../controllers/parkingcontroller')


router.get('/',regc.loginpage)
router.post('/',regc.logincheck)

router.get('/reg',regc.regform)
router.post('/reg',regc.register)

router.get('/parking',parkingc.parkingdetails)

router.get('/addnew',parkingc.addform)
router.post('/addnew',parkingc.add)

router.get('/parkingupdate/:id',parkingc.update)

router.get('/parkingprint/:id',parkingc.print)

module.exports=router