const express = require('express')
const {getAllDataMarketing, getAllDataCommission, getAllDataSelling} = require('../controller/controller')

const router= express.Router()

router.get('/all', getAllDataMarketing)

router.get('/all-com', getAllDataCommission)

router.get('/all-sell', getAllDataSelling)

module.exports = router