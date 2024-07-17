const express=require('express')

const eventController=require('../CONTROLLERS/eventControllers')

const userController=require('../CONTROLLERS/userController')

const adminController=require('../CONTROLLERS/adminController')

const bookingController=require('../CONTROLLERS/bookingControllers')

const router=new express.Router()

// all user 
router.get('/user/view',userController.getauser)

// single user with _id
router.get('/user/single/:_id',userController.getuserid)

// add events
router.post('/event/add',eventController.addEvents)

// edit events
router.put('/event/edit/:_id',eventController.editEvent)

//  get all events
router.get('/events/getall',eventController.getAllevent)

// get a single user event
router.get('/event/view/:id',eventController.getaEvent)

// delete a event
router.delete('/deleteEvent/:id',eventController.deleteEvent)

// user register
router.post('/user/register',userController.registerController)

// user login
router.post('/user/login',userController.loginController)

// admin login
router.post('/admin/login',adminController.loginController)

// book events
router.post('/event/book',bookingController.bookEvent)

//  get all bookings
router.get('/bookings',bookingController.getAllbookings)

// delete bookings
router.delete('/delete/:id',bookingController.deletebook)

module.exports=router