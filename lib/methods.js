Meteor.methods({
  getPicture:function(url){
     HTTP.get(url, function(error, result){
       if(error){
         console.log("we had an http error here it is:", error);
       }
       if(result){
          return result;
       }
     });
  }
});
