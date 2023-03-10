/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  
  '*': 'is-logged-in',
  EventController: {
    'find':'is-super-admin',
    '*': 'is-logged-in',
      'find': true,
      'findOne': true,
      'findEventsByCategory':true,
      'searchCategoryStadt':true
  },
 

  
  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-impressum': true,
  'deliver-contact-form-message': true,
  



  

};
