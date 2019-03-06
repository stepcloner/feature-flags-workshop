const FEATURE = {
  promo_code: true,
  tax: true,
  service_charge: true,
  total: false,
  tax_amount: 0.07,
  global_discount: false
};

module.exports = {
  isActive: function(name) {
    return FEATURE[name];
  },
  getConfig: function(name) {
    return FEATURE[name];
  }
};
