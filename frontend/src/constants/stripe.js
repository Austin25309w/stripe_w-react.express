const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_test_yThA2RySATebEbPZlLYTT4Km'
    : 'pk_test_yThA2RySATebEbPZlLYTT4Km';

export default STRIPE_PUBLISHABLE;
