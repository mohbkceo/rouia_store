import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  // -----------------------------
  // CART STATE
  // -----------------------------
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);

  // -----------------------------
  // PERSIST CART
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -----------------------------
  // ADD TO CART
  // -----------------------------
  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.variantId === item.variantId
      );

      if (existing) {
        return prev.map((i) =>
          i.variantId === item.variantId
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }

  // -----------------------------
  // REMOVE ITEM
  // -----------------------------
  function removeFromCart(variantId) {
    setCart((prev) =>
      prev.filter((item) => item.variantId !== variantId)
    );
  }

  // -----------------------------
  // UPDATE QUANTITY
  // -----------------------------
  function updateCartQuantity(variantId, quantity) {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.variantId === variantId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  }

  // -----------------------------
  // CLEAR CART
  // -----------------------------
  function clearCart() {
    setCart([]);
  }

  // -----------------------------
  // TOTAL ITEMS
  // -----------------------------
  const cartCount = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cart]);

 
  const cartSubtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        cart,

        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,

        cartCount,
        cartSubtotal,

        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);

  if (!ctx) {
    throw new Error(
      "useStore must be used inside StoreProvider"
    );
  }

  return ctx;
}