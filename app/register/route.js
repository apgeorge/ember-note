import Ember from 'ember';

export default Ember.Route.extend({

  actions:{
    addNew:function(){
      alert("hey");
      var user = this.store.createRecord('user',{
        name: this.controller.get('name')
      });
      user.save().then( () => {
        console.log('save success');
        this.controller.set('message', 'A new user: ' + this.controller.get('name'));
        this.controller.set('name', null);
      }, function () {
          console.log('save failed');
        }
      );
    }
  }

});
