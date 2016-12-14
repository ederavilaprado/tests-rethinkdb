
var r = require('rethinkdb');

var connection = null;
r.connect({host: 'localhost', port: 32769}, function(err, conn) {
  if (err) throw err
  connection = conn

  // // Creating the database
  // r.db('test').tableCreate('authors').run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // })

  // Inserting authors
  // Each connection sets a default database to use during its lifetime (if you don’t specify one in connect, the default database is set to test).
  // r.table('authors').insert([
  //   { name: "William Adama", tv_show: "Battlestar Galactica",
  //     posts: [
  //       {title: "Decommissioning speech", content: "The Cylon War is long over..."},
  //       {title: "We are at war", content: "Moments ago, this ship received word..."},
  //       {title: "The new Earth", content: "The discoveries of the past few days..."}
  //     ]
  //   },
  //   { name: "Laura Roslin", tv_show: "Battlestar Galactica",
  //     posts: [
  //       {title: "The oath of office", content: "I, Laura Roslin, ..."},
  //       {title: "They look like us", content: "The Cylons have the ability..."}
  //     ]
  //   },
  //   { name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
  //     posts: [
  //       {title: "Civil rights", content: "There are some words I've known since..."}
  //     ]
  //   },
  // ]).run(connection, function(err, result) {
  //     if (err) throw err;
  //     console.log(JSON.stringify(result, null, 2));
  // })

  // Get all authors
  // r.table('authors').run(connection, function(err, cursor) {
  //   // Always return a curso in order to save some memory
  //   if (err) throw err;
  //   // As we know we only have 3 docs, we can request all at once
  //   cursor.toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(JSON.stringify(result, null, 2));
  //   });
  // });

  // // Filtering
  // r.table('authors').filter(r.row('name').eq("William Adama")).run(connection, function(err, cursor) {
  //   if (err) throw err;
  //   cursor.toArray(function(err, result) {
  //       if (err) throw err;
  //       console.log(JSON.stringify(result, null, 2));
  //   });
  // });

  // // Filtering
  // // r.table('authors').filter(r.row('posts').count().ge(2)).run(connection, function(err, cursor) {
  // r.table('authors').filter(r.row('posts').count().gt(2)).run(connection, function(err, cursor) {
  //   if (err) throw err;
  //   cursor.toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(JSON.stringify(result, null, 2));
  //   });
  // });

  // // Get by ID
  // r.table('authors').get('2397fdf7-f97b-4213-990d-4b1978bf3f8c').run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // });

  // Updating all
  // r.table('authors').update({type: "fictional"}).run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // });
  //

  // Updating with filter
  // r.table('authors').filter(r.row("name").eq("William Adama")).update({rank: "Admiral"}).run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // });

  // Update with append to array
  // r.table('authors').filter(r.row("name").eq("Jean-Luc Picard")).update(
  //   {
  //     posts: r.row("posts").append({
  //       title: "Shakespeare",
  //       content: "What a piece of work is man..."
  //     })
  //   }
  // ).run(connection, function(err, result) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(result, null, 2));
  // });

  // // Listening for changes
  // r.table('authors').changes().run(connection, function(err, cursor) {
  //   if (err) throw err;
  //   cursor.each(function(err, row) {
  //     if (err) throw err;
  //     console.log(JSON.stringify(row, null, 2));
  //   });
  // });

})
