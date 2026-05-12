import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { useStore } from "../context/StoreContext.jsx";
import { formatPrice } from "../utils/formatPrice.js";

import { createDraftOrder } from "../services/orders.js";

import Button from "../components/common/Button.jsx";
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";

import { useState } from "react";

export default function CartPage() {
  const navigate = useNavigate();

  const {
    cart = [],
    removeFromCart,
    updateCartQuantity,
    clearCart,
  } = useStore();

  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  // -----------------------------------
  // CHECKOUT
  // -----------------------------------

  async function handleCheckout(formData) {
    try {
      setLoading(true);

      const payload = {
        customer: formData,

        items: cart.map((item) => ({
          variantId: item.variantId,
          title: item.title,
          variantTitle: item.variantTitle,
          quantity: item.quantity,
          price: item.price,
        })),

        subtotal,
      };

      const response =
        await createDraftOrder(payload);

      if (response.success) {
        clearCart();

        navigate("/checkout/success");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // -----------------------------------
  // EMPTY CART
  // -----------------------------------

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-brand/5 flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-brand/40" />
          </div>

          <h1 className="font-display text-3xl font-bold text-brand">
            Your cart is empty
          </h1>

          <p className="mt-3 text-brand/60 leading-relaxed">
            Looks like you haven’t added anything yet.
          </p>

          <Link
            to="/collection/all"
            className="mt-8"
          >
            <Button className="px-8 py-3">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  // -----------------------------------
  // PAGE
  // -----------------------------------

  return (
    <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand">
            Shopping Cart
          </h1>

          <p className="text-brand/50 mt-2">
            {cart.length} item
            {cart.length > 1 ? "s" : ""} in
            your cart
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-sm text-brand/50 hover:text-red-500 transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_420px] gap-10">
        {/* CART ITEMS */}
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.variantId}
              className="
                border
                border-brand/10
                rounded-3xl
                p-4 md:p-5
                flex
                gap-4
                bg-white
              "
            >
              {/* IMAGE */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-brand/5 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-brand text-base md:text-lg leading-tight">
                      {item.title}
                    </h2>

                    {item.variantTitle &&
                      item.variantTitle !==
                        "Default Title" && (
                        <p className="text-sm text-brand/50 mt-1">
                          {
                            item.variantTitle
                          }
                        </p>
                      )}
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.variantId
                      )
                    }
                    className="text-brand/40 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-auto pt-5 flex items-end justify-between gap-4">
                  {/* QUANTITY */}
                  <div className="flex items-center border border-brand/10 rounded-full overflow-hidden">
                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.variantId,
                          Math.max(
                            1,
                            item.quantity - 1
                          )
                        )
                      }
                      className="px-4 py-2 text-brand hover:bg-brand/5 transition-colors"
                    >
                      -
                    </button>

                    <span className="px-4 text-sm font-medium text-brand">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.variantId,
                          item.quantity + 1
                        )
                      }
                      className="px-4 py-2 text-brand hover:bg-brand/5 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* PRICE */}
                  <div className="text-right">
                    <p className="text-sm text-brand/40">
                      {formatPrice(
                        item.price,
                        item.currencyCode ||
                          "USD"
                      )}{" "}
                      each
                    </p>

                    <p className="text-lg font-semibold text-brand">
                      {formatPrice(
                        item.price *
                          item.quantity,
                        item.currencyCode ||
                          "USD"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY + CHECKOUT */}
        <div
          className="
            h-fit
            sticky
            top-24
            border
            border-brand/10
            rounded-3xl
            p-6
            bg-brand/[0.02]
          "
        >
          {/* SUMMARY */}
          <div>
            <h2 className="font-display text-2xl font-bold text-brand">
              Order Summary
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-brand/60">
                <span>Subtotal</span>

                <span className="font-medium text-brand">
                  {formatPrice(
                    subtotal,
                    "USD"
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-brand/60">
                <span>Shipping</span>

                <span className="font-medium text-brand">
                  Calculated later
                </span>
              </div>

              <div className="border-t border-brand/10 pt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand">
                  Total
                </span>

                <span className="text-2xl font-bold text-brand">
                  {formatPrice(
                    subtotal,
                    "USD"
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="mt-8 pt-8 border-t border-brand/10">
            <div className="flex items-center gap-2 mb-5">
              <ArrowRight className="w-4 h-4 text-brand/50" />

              <h3 className="font-semibold text-brand">
                Checkout Information
              </h3>
            </div>

            <CheckoutForm
              loading={loading}
              onSubmit={handleCheckout}
            />
          </div>

          {/* CONTINUE SHOPPING */}
          <Link
            to="/collection/all"
            className="block text-center text-sm text-brand/50 hover:text-brand transition-colors mt-6"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}