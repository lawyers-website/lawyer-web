import Stripe from "stripe";
import { env } from "@/env/server.mjs";
import { NextApiHandler } from "next";
import { prisma } from "@/server/db/client";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

const calculateOrderAmount = async (lawyerId: string) => {
  const lawyer = await prisma.lawyerDetails.findUnique({
    where: {
      lawyerId,
    },
  });

  if (!lawyer) {
    throw "Lawyer doesn't exits";
  }

  return lawyer.price;
};

const handler: NextApiHandler = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount("clannpcd500241v0n9t5fnnow"),
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

export default handler;
