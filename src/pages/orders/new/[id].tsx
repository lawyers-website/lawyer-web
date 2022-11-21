import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import { env } from "@/env/server.mjs";
import {
  Flex,
  StackDivider,
  VStack,
  Image,
  Box,
  HStack,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { LawyerDetails } from "@prisma/client";
import { getSession } from "next-auth/react";
import { prisma } from "@/server/db/client";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

interface Props {
  lawyerData: LawyerDetails | null;
  clientId: string;
}

export default function App({ lawyerData, clientId }: Props) {
  const [clientSecret, setClientSecret] = React.useState("");

  const { query } = useRouter();
  const [isPaymentIntentCreated, setIntentCreated] = React.useState(false);

  React.useEffect(() => {
    if (query.id && !isPaymentIntentCreated) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lawyerId: query.id, clientId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIntentCreated(true);
          return setClientSecret(data.clientSecret);
        });
    }
  }, []);

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
        <HStack spacing={10}>
          <Box>
            <Image
              rounded="md"
              alt="Lawyer Image"
              src={lawyerData?.image as string}
            />
          </Box>
          <Box>
            <Heading size="sm">{lawyerData?.fullName}</Heading>
            <Heading size="xm" color="blue.500" mt={3}>
              {lawyerData?.price}$/Hr
            </Heading>
          </Box>
        </HStack>
        <Textarea placeholder="Enter note here" />
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
      </VStack>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps<
  {
    lawyerData: LawyerDetails | null;
    clientId: string | undefined;
  },
  { id: string }
> = async (ctx) => {
  const session = await getSession(ctx);
  const isUser = !!session?.user;

  if (!isUser) {
    return {
      redirect: {
        destination: "/user/user-in",
        permanent: false,
      },
    };
  }

  const LawyerDetails = await prisma.lawyerDetails.findUnique({
    where: { id: ctx.params?.id },
  });

  console.log(session.user?.id);

  return {
    props: {
      lawyerData: LawyerDetails,
      clientId: session.user?.id,
    },
  };
};
