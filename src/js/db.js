var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "students_shifting_program",
  insecureAuth : true
});


var students_name_array = {}

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    let take_name_sql = "SELECT * FROM users;"

    con.query(take_name_sql, function (err, result) {
      if (err) throw err;
      var string = JSON.stringify(result);
      var json = JSON.parse(string);
      students_name_array = json;
      console.log(students_name_array[0].id);
    });
});

module.exports = {students_name_array};