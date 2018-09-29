var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(messages) {
    var html = "";
    //for (var key in messages) {
    html += MessageView.render(messages);
    //}  
    this.$chats.append(html);  
  }

};