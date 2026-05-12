import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import Button from "../components/common/Button.jsx";

export default function CheckoutSuccess() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div
          className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-green-500/10
            flex
            items-center
            justify-center
            mb-8
          "
        >
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>

        <h1
          className="
            font-display
            text-4xl
            font-bold
            text-brand
          "
        >
          Order Confirmed
        </h1>

        <p
          className="
            mt-4
            text-brand/60
            leading-relaxed
          "
        >
          Your order has been successfully placed.
          We will contact you shortly to confirm
          delivery details.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="px-8 py-3">
              Back Home
            </Button>
          </Link>

          <Link to="/collections/all">
            <Button
              variant="secondary"
              className="px-8 py-3"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}