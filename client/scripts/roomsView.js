var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
  },

  renderRoom: function(room) {
    var html = "";
    //for (var key in messages) {
    html += MessageView.render(room);
    //}  
    this.$select.append(html);  
  }

};
