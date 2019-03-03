const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_d89xcUW01GrxnzMMyPtdQwUQ'
    : 'sk_test_d89xcUW01GrxnzMMyPtdQwUQ';


const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

