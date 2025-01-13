## FRONTEND of the School Payments and Dashboard application.
This project basciall cover the transaction related informatin based school payments of all students. data is completely coming from backend API by using database.
This project we are display transaction data and performe CRUD operation by consuming backend deployed APIs through Database.
We are display transaction data in Table form.
## Features 
* Searching and filtering based on school id, custom order id and based on start date and end date
* Status check by using drop down "Pending", "Success", "Failure"
## APIs
POST https://edviron-school-payment-backend-2.onrender.com/registration
POST https://edviron-school-payment-backend-2.onrender.com/login
GET https://edviron-school-payment-backend-2.onrender.com/user/profile
https://edviron-school-payment-backend-2.onrender.com/transaction?status=Failed&startDate=2024-01-01&endDate=2024-12-31&pageNo=1
PUT https://edviron-school-payment-backend-2.onrender.com/transactions/status-update/:id


GET https://edviron-school-payment-backend-2.onrender.com/transaction/school/:schoolId
GET https://edviron-school-payment-backend-2.onrender.com/transactions/status/:orderId
