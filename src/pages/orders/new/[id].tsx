import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import { env } from "@/env/client.mjs";
import { Box } from "@chakra-ui/react";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <Box>
      {clientSecret && (
        <Elements
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
            },
          }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
}
