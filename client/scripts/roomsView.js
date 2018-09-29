var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
  },

  renderRoom: function(room) {
    var html = "";

    html += MessageView.render(room);

    this.$select.append(html);  
  }

};
