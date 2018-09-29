var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.selectButton();
  },

  renderRoom: function(room) {
    this.$select.append(room);  
  },

  selectButton: function() {
    this.$button.click(function() {
      var room = prompt('Room Name: ');
      RoomsView.renderRoom(`<option value="<%-room%>">${room}</option>`);
      Rooms.roomNames.push(room);
      console.log('Rooms.roomNames = ', Rooms.roomNames);
    });
  }

};


// new room goes with message to be sent to server
// populate select with room names
// modify message view to display only messages from specific rooms