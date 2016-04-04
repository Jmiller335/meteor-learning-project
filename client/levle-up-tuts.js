

Template.body.helpers({
  rendered: function(){
    return CoolDatabase.find();
  },

  toggleedit: function(){

  }

});

Template.body.events({
  "keypress #movieInput": function(event){
     console.log('key', event);
     if (event.charCode == 13) {

       var targetData = $( '#movieInput' ).val();
       CoolDatabase.insert({title: targetData, createdAt: new Date()});
       $( '#movieInput' ).val( '' );

     }
  },

  "dblclick .movie-line": function(event){
    console.log('event fired');
    CoolDatabase.remove(this._id);
  },

  "click .movie-line": function (event) {
    $(event.target).next().toggle();
    $(event.target).next().find( '#updatefield' ).val( this.title );
  },

  "keypress #updatefield": function (event){
    var self = this;
    if ( event.keyCode === 13){
      var updateString = $(event.target).val();
      CoolDatabase.update(this._id, {$set: {title: updateString}});
      $(event.target).parent().toggle();
    }
  }

});


// Template.body.events({
//
//   // "click #insertbutton": function(event){
//   //    console.log("event fired");
//   //    var dataFieldValue = event.target.data-field.value;
//   //
//   //    CoolDatabase.insert({
//   //      title: dataFieldValue,
//   //      createdAt: new Date()
//   //    });
//   //
//   //    return false;
//   // }
// });
