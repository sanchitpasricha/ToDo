
exports.getDate = function(){
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  let today = new Date();

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

exports.getDay = function(){
    let options = {
        weekday: 'long'
      }
      let today = new Date();
    
      let day = today.toLocaleDateString("en-US", options);
    
      return day;
    }

