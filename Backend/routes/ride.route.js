const express = require('express')
const router = express.Router()
const {body}= require('express-validator')
router.post('/create',(req,res)=>{
    body('userId').isString().isLength({min:24,max:24}).withMessage("Invalid use id"),
    body('pickup').isString().isLength({min:3}).withMessage("Invalid pickup address"),
    body('destination').isString().isLength({min:3}).withMessage("Invalid pickup address"),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type')


})



module.exports = router