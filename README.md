# Web Technology Experiment 8  
## Node.js Server Application with MongoDB Database  

### Objective  
To develop a full-stack web application that performs basic database operations such as inserting, fetching, and deleting records using client-side and server-side technologies.

---

### Theme: Online Donation and Fundraising Platform  
This project allows users to make donations by entering their name, donation amount, and a message.  
The records are stored in a MongoDB database and can be viewed or deleted through a simple web interface.  
A total donation counter is also displayed.

---

### Installation & Setup

**Clone the repository**
```bash
git clone https://github.com/itsjamestom/wbexp8.git
cd exp8
npm install
```
**Start both the backend and frontend servers:**
```bash
#In one terminal
node server/server.js

#In another terminal
cd client
http-server -p 3000
```
Now open http://localhost:3000
