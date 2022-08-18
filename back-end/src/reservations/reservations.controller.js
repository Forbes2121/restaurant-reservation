/**
 * List handler for reservation resources
 */

 const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
 const service = require("./reservations.service");
 const { theValidator } = require("../../../front-end/src/utils/validateTest");
 
 async function list(req, res) {
   const reservations = await service.listByDate(req.query.date);
   res.json({
     data: [...reservations],
   });
 }
 async function validate(req, res, next) {
   const added = req.body.data;
   let message;
   function setError(err) {
     if (err) message = err.message;
   }
   if (!added)
     return next({
       status: 400,
       message:
         "Invalid data format provided. Requires {string: [first_name, last_name, mobile_number], date: reservation_date, time: reservation_time, number: people}",
     });
   if (!theValidator(added, setError) || typeof added.people != "number") {
     if (!message) {
       message = "people must be a number";
     }
     return next({ status: 400, message });
   } else {
     return next();
   }
 }
 async function create(req, res) {
   const added = await service.create(req.body.data);
   res.status(201).json({ data: added });
 }
 async function read(req, res) {
   const reservation = await service.read(req.params.id);
   res.json({
     data: reservation,
   });
 }
 module.exports = {
   list: asyncErrorBoundary(list),
   create: [asyncErrorBoundary(validate), asyncErrorBoundary(create)],
   read: asyncErrorBoundary(read)
 };