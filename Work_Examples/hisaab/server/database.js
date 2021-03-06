const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("hisaab.db");
db.serialize(() => {
  db.run("CREATE TABLE if not exists user_info (info TEXT)");
  var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
  for (var i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM user_info", function (err, row) {
    console.log(row.id + ": " + row.info);
  });
});

db.close();
