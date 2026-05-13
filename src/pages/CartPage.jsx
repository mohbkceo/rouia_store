import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";

import { useStore } from "../context/StoreContext.jsx";
import { formatPrice } from "../utils/formatPrice.js";

import Button from "../components/common/Button.jsx";
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";

const WHATSAPP_NUMBER = "213553374615";

export default function CartPage() {
  const {
    cart = [],
    removeFromCart,
    updateCartQuantity,
    clearCart,
  } = useStore();

  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function buildWhatsAppMessage(formData) {
    const itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.title}${
            item.variantTitle && item.variantTitle !== "Default Title"
              ? ` - ${item.variantTitle}`
              : ""
          }
Qté : ${item.quantity}
Prix : ${formatPrice(
  item.price * item.quantity,
  item.currencyCode || "USD"
)}`
      )
      .join("\n\n");

    return `
Nouvelle demande de commande

Informations client :
- Nom complet : ${formData.fullName}
- Numéro de téléphone : ${formData.phoneNumber}
- Adresse : ${formData.address}

Articles :
${itemsText}

Sous-total : ${formatPrice(subtotal, "USD")}
Livraison : Calculée ultérieurement
Total : ${formatPrice(subtotal, "USD")}

Veuillez confirmer cette commande.
    `.trim();
  }

  async function handleCheckout(formData) {
    try {
      setLoading(true);

      const message = buildWhatsAppMessage(formData);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-brand/5 flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-brand/40" />
          </div>

          <h1 className="font-display text-3xl font-bold text-brand">
            Votre panier est vide
          </h1>

          <p className="mt-3 text-brand/60 leading-relaxed">
            On dirait que vous n'avez encore rien ajouté.
          </p>

          <Link to="/collections/all" className="mt-8">
            <Button className="px-8 py-3">Continuer vos achats</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brand">
            Panier
          </h1>

          <p className="text-brand/50 mt-2">
            {cart.length} article{cart.length > 1 ? "s" : ""} dans votre panier
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-sm text-brand/50 hover:text-red-500 transition-colors"
        >
          Vider le panier
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_420px] gap-10">
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.variantId}
              className="border border-brand/10 rounded-3xl p-4 md:p-5 flex gap-4 bg-white"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-brand/5 shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-brand text-base md:text-lg leading-tight">
                      {item.title}
                    </h2>

                    {item.variantTitle &&
                      item.variantTitle !== "Default Title" && (
                        <p className="text-sm text-brand/50 mt-1">
                          {item.variantTitle}
                        </p>
                      )}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.variantId)}
                    className="text-brand/40 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-auto pt-5 flex items-end justify-between gap-4">
                  <div className="flex items-center border border-brand/10 rounded-full overflow-hidden">
                    <button
                      onClick={() =>
                        updateCartQuantity(
                          item.variantId,
                          Math.max(1, item.quantity - 1)
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
                        updateCartQuantity(item.variantId, item.quantity + 1)
                      }
                      className="px-4 py-2 text-brand hover:bg-brand/5 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-brand/40">
                      {formatPrice(item.price, item.currencyCode || "USD")} pièce
                    </p>

                    <p className="text-lg font-semibold text-brand">
                      {formatPrice(
                        item.price * item.quantity,
                        item.currencyCode || "USD"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit sticky top-24 border border-brand/10 rounded-3xl p-6 bg-brand/[0.02]">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand">
              Résumé de la commande
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-brand/60">
                <span>Sous-total</span>
                <span className="font-medium text-brand">
                  {formatPrice(subtotal, "USD")}
                </span>
              </div>

              <div className="flex items-center justify-between text-brand/60">
                <span>Livraison</span>
                <span className="font-medium text-brand">
                  Calculée ultérieurement
                </span>
              </div>

              <div className="border-t border-brand/10 pt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand">Total</span>
                <span className="text-2xl font-bold text-brand">
                  {formatPrice(subtotal, "USD")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-brand/10">
            <div className="flex items-center gap-2 mb-5">
              <ArrowRight className="w-4 h-4 text-brand/50" />
              <h3 className="font-semibold text-brand">Informations de paiement</h3>
            </div>

            <CheckoutForm loading={loading} onSubmit={handleCheckout} />
          </div>

          <Link
            to="/collection/all"
            className="block text-center text-sm text-brand/50 hover:text-brand transition-colors mt-6"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    </section>
  );
}