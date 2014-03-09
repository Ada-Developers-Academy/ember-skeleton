App.PlantsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("plant")
  }
})