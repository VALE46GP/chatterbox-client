var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function(message) {
    var html = "";
    
    html += MessageView.render(message);
    
    MessagesView.$chats.append(html);
  }

};