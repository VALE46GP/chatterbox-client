var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.selectButton();
    this.realSelectButton();
  },

  renderRoom: function(room) {
    this.$select.append(room);  
  },

  selectButton: function() {
    this.$button.click(function() {
      var room = prompt('Room Name: ');
      RoomsView.renderRoom(`<option value="<%-room%>">${room}</option>`);
      Rooms.roomNames.push(room);
      //console.log('Rooms.roomNames = ', Rooms.roomNames);
    });
  },

  realSelectButton: function() {
    this.$select.click(function() {
      RoomsView.populateSelect();
      MessagesView.renderMessageByRoom($("#selectRoom option:selected").text());
     });
  },

  populateSelect: function() {
    this.$select.html('');
    Rooms.roomNames.forEach(r => {
      this.$select.append(`<option value="<%-r%>">${r}</option>`)
    });
    //$('#rooms').appendTo(this.$select)
    
  }

};


// populate select with room names - lol
// populate Messages with server messages
// modify message view to display only messages from specific rooms