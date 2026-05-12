export async function createDraftOrder(payload) {



   const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/content/rouai/place_orders`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(payload),
   })
   return await res.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: Date.now(),
      });
    }, 1500);
  });
}