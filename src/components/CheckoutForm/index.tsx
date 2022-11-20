import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  Button,
  Flex,
  Image,
  VStack,
  Text,
  StackDivider,
  Box,
  Textarea,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <Flex justifyContent={"center"}>
      <VStack
        width="600px"
        justifyContent="center"
        borderRadius="10"
        p={10}
        divider={<StackDivider />}
        spacing={5}
      >
        <Box width="100%" p={5}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
              m={3}
            />

            <Stack>
              <CardBody>
                <Heading size="sm">The perfect latte</Heading>

                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Text color="blue.600" fontSize="2xl">
                  $450/hr
                </Text>
              </CardFooter>
            </Stack>
          </Card>

          <Textarea placeholder="Describe your requirements" />
        </Box>
        <form
          id="payment-form"
          onSubmit={handleSubmit}
          style={{ width: "100%" }}
        >
          <PaymentElement id="payment-element" />
          <Button
            disabled={isLoading || !stripe || !elements}
            type="submit"
            isLoading={isLoading}
            width="100%"
            mt={3}
            mb={3}
          >
            Pay
          </Button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </VStack>
    </Flex>
  );
}
