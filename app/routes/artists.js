import Ember from 'ember';

export default Ember.Route.extend({

model: function(){

    return $.ajax({
      url: "http://itp-api.herokuapp.com/api/artists",
      success: function(artists){
        return artists;
    }});
  }
});
