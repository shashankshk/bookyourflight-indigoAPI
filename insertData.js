const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";
const currentDate = new Date().getDate();
const data = [
    {
        operator: "Indigo",
        number: 111,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate, 10, 30),
        departure: new Date(2019, 7, currentDate, 12, 45),
        price: 4000
    },

    {
        operator: "Indigo",
        number: 222,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate, 12, 30),
        departure: new Date(2019, 7, currentDate, 14, 45),
        price: 4000
    },

    {
        operator: "Indigo",
        number: 333,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate, 15, 30),
        departure: new Date(2019, 7, currentDate, 17, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 444,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate, 14, 45),
        departure: new Date(2019, 7, currentDate, 16, 50),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 111,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate +1,
        month: new Date().getUTCMonth() +1,
        arrival:  new Date(2019, 7, currentDate + 1, 10, 30),
        departure: new Date(2019, 7, currentDate + 1, 12, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 222,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate +1,
        month: new Date().getUTCMonth() +1,
        arrival:  new Date(2019, 7, currentDate + 1, 12, 30),
        departure: new Date(2019, 7, currentDate + 1, 14, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 333,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate +1 ,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate + 1, 15, 30),
        departure: new Date(2019, 7, currentDate + 1, 17, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 444,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate +1,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate + 1, 14, 45),
        departure: new Date(2019, 7, currentDate + 1, 16, 50),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 111,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+2,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate + 1, 10, 30),
        departure: new Date(2019, 7, currentDate + 1, 12, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 222,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+2,
        month: new Date().getUTCMonth() +1,
        arrival:  new Date(2019, 7, currentDate + 2, 12, 30),
        departure: new Date(2019, 7, currentDate+2, 14, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 333,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+2,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate+2, 15, 30),
        departure: new Date(2019, 7, currentDate+2, 17, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 444,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+2,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate+ 2, 14, 45),
        departure: new Date(2019, 7, currentDate+2, 16, 50),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 111,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+3,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate + 3, 10, 30),
        departure: new Date(2019, 7, currentDate+3, 12, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 222,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+3,
        month: new Date().getUTCMonth() +1,
        arrival:  new Date(2019, 7, currentDate + 3, 12, 30),
        departure: new Date(2019, 7, currentDate+3, 14, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 333,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+3,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate + 3, 15, 30),
        departure: new Date(2019, 7, currentDate+3, 17, 45),
        price: 4000
    },
    {
        operator: "Indigo",
        number: 444,
        seats: 50,
        source: 'Delhi',
        destination: 'Mumbai',
        date: currentDate+3,
        month: new Date().getUTCMonth() +1,
        arrival: new Date(2019, 7, currentDate+3, 14, 45),
        departure: new Date(2019, 7, currentDate+3, 16, 50),
        price: 4000
    },
]
MongoClient.connect(url,{useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    indigoDB = db.db('indigoFlights');
    console.log("Database created!");
    indigoDB.collection('indigoflights').insertMany(data, (doc, err) => {
        console.log(doc);
    })
    db.close();
  });