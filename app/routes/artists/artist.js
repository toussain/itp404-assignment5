import Ember from 'ember';

export default Ember.Route.extend({

  model: function(artist){
  console.log(artist);
  var url = 'http://itp-api.herokuapp.com/api/artists/' + artist.id + '/songs';
  return $.getJSON(url); //promise
},

afterModel: function(model){
  console.log(model);
}
});
