App.Item = DS.Model.extend({
  product: DS.belongsTo("product", {async: true}),
  cart: DS.belongsTo("cart", {async: true}),
  cents: DS.attr("number")
})
// var CartAdapter = DS.LSAdapter.extend({});

App.Item.FIXTURES = [{id: 1, product: 1, cart: 1, cents: 199}]