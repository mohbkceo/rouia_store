import { useMemo, useState } from "react";

import { formatPrice } from "../../utils/formatPrice.js";
import { useStore } from "../../context/StoreContext.jsx";

import Button from "../common/Button.jsx";
import CheckoutForm from "../checkout/CheckoutForm.jsx";

const WHATSAPP_NUMBER = "213553374615"; //213553374615

export default function ProductInfo({ product }) {
  const { addToCart } = useStore();

  const variants = useMemo(
    () => product.variants?.edges?.map((e) => e.node) || [],
    [product]
  );

  const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);
  const [added, setAdded] = useState(false);
  const [buyingNow, setBuyingNow] = useState(false);

  const selectedPrice = selectedVariant?.price;
  const selectedCompareAt = selectedVariant?.compareAtPrice;

  const hasDiscount =
    selectedCompareAt &&
    parseFloat(selectedCompareAt.amount) > parseFloat(selectedPrice?.amount);

  function handleAddToCart() {
    if (!selectedVariant) return;

    addToCart({
      variantId: selectedVariant.id,
      title: product.title,
      variantTitle: selectedVariant.title,
      price: parseFloat(selectedPrice?.amount || 0),
      compareAtPrice: selectedCompareAt
        ? parseFloat(selectedCompareAt.amount)
        : null,
      currencyCode: selectedPrice?.currencyCode,
      image: product.images?.edges?.[0]?.node?.url,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function buildWhatsAppMessage(formData) {
    return `
New Order Request

Customer:
- Full Name: ${formData.fullName}
- Phone Number: ${formData.phoneNumber}
- Address: ${formData.address}

Product:
- Title: ${product.title}
- Variant: ${selectedVariant?.title || "Default"}
- Quantity: 1
- Price: ${selectedPrice?.amount || "0"} ${selectedPrice?.currencyCode || ""}

Subtotal: ${selectedPrice?.amount || "0"} ${selectedPrice?.currencyCode || ""}

Please confirm this order.
    `.trim();
  }

  async function handleBuyNow(formData) {
    if (!selectedVariant) return;

    try {
      setBuyingNow(true);

      const message = buildWhatsAppMessage(formData);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
    } finally {
      setBuyingNow(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-brand">
          {product.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
          {selectedPrice && (
            <span className="text-xl sm:text-2xl font-semibold text-brand">
              {formatPrice(selectedPrice.amount, selectedPrice.currencyCode)}
            </span>
          )}

          {hasDiscount && (
            <span className="text-sm sm:text-base text-brand/40 line-through">
              {formatPrice(
                selectedCompareAt.amount,
                selectedCompareAt.currencyCode
              )}
            </span>
          )}

          {hasDiscount && (
            <span className="rounded-full bg-accent/15 px-2 py-1 text-[10px] sm:text-xs font-bold text-accent">
              Sale
            </span>
          )}
        </div>
      </div>

      {variants.length > 1 && (
        <div>
          <p className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand/50">
            Size / Variant
          </p>

          <div className="flex flex-wrap gap-2">
            {variants.map((v) => {
              return (
                <button
                  key={v.id}
                  disabled={!v.availableForSale}
                  onClick={() => setSelectedVariant(v)}
                  className={`
                    min-w-[92px]
                    px-3 sm:px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    border
                    transition-all
                    ${
                      selectedVariant?.id === v.id
                        ? "bg-brand text-white border-brand"
                        : v.availableForSale
                        ? "border-brand/20 text-brand hover:border-brand"
                        : "border-brand/10 text-brand/30 line-through cursor-not-allowed"
                    }
                  `}
                >
                  <span className="block">{v.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <Button
        onClick={handleAddToCart}
        disabled={!selectedVariant?.availableForSale}
        className="w-full py-4"
      >
        {added
          ? "✓ Added to cart"
          : selectedVariant?.availableForSale
          ? "Add to Cart"
          : "Out of Stock"}
      </Button>

      <div className="mt-2 border border-brand/10 rounded-3xl p-5 bg-brand/[0.02]">
        <h2 className="font-semibold text-brand text-lg mb-5">
          Quick Checkout
        </h2>

        <CheckoutForm loading={buyingNow} onSubmit={handleBuyNow} />
      </div>
    </div>
  );
}