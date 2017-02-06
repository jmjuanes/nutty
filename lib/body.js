//Parse the text from stdin
module.exports = function(cb)
{
  //Check if is being run inside a text terminal ("TTY") context
  //https://nodejs.org/api/tty.html
  if(process.stdin.isTTY){ return cb(''); }

  //Body content
  var body = '';

  //Resume the event
  process.stdin.resume();

  //Set the default encoding
  process.stdin.setEncoding('utf8');

  //New data from stdin
  process.stdin.on('data', function(data){ body = body + data; });

  //End event
  process.stdin.on('end', function(){ return cb(body); });
};