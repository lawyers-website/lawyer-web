import { env } from "@/env/server.mjs";
import { StripeError } from "@stripe/stripe-js";
import { buffer } from "micro";
import { NextApiHandler } from "next";
import { prisma } from "@/server/db/client";
import Stripe from "stripe";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
const webhookSecret = env.STRIPE_WEBHOOK_ENDPOINT_SECRET;

type orderstatus = "FAILED" | "CONFORMED";

const updateOrder = async (status: orderstatus, orderId: string) => {
  return prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      orderStatus: status,
    },
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let stripeEvent;

    try {
      stripeEvent = stripe.webhooks.constructEvent(buf, sig!, webhookSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${(err as StripeError)?.message}`);
      return;
    }

    if ("charge.succeeded" === stripeEvent.type) {
      const session = stripeEvent.data.object as {
        metadata: any;
      };

      try {
        const result = await updateOrder("CONFORMED", session.metadata.orderId);
        console.log(result);
      } catch (error) {}
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
