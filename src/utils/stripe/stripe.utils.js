import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  'pk_test_51MYwlpFA1rEClbWwvFF1KzRawOJyt5IARiJzzXjq8gdRS5t2RASqQKMfsrHSI0ysyKYFbHxhmWOqwYnCz01iQMpZ00Uv8J5KEY',
);
