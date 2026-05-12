import { useState } from "react";
import Button from "../common/Button.jsx";

export default function CheckoutForm({
  loading,
  onSubmit,
}) {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.phoneNumber.trim() ||
      !form.address.trim()
    ) {
      return;
    }

    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* FULL NAME */}
      <div>
        <label className="block mb-2 text-sm font-medium text-brand">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="
            w-full
            px-4
            py-3
            rounded-2xl
            border
            border-brand/10
            bg-white
            outline-none
            focus:border-brand/30
          "
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block mb-2 text-sm font-medium text-brand">
          Phone Number
        </label>

        <input
          type="tel"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="+213 ..."
          className="
            w-full
            px-4
            py-3
            rounded-2xl
            border
            border-brand/10
            bg-white
            outline-none
            focus:border-brand/30
          "
        />
      </div>

      {/* ADDRESS */}
      <div>
        <label className="block mb-2 text-sm font-medium text-brand">
          Address
        </label>

        <textarea
          name="address"
          rows="4"
          value={form.address}
          onChange={handleChange}
          placeholder="Your address..."
          className="
            w-full
            px-4
            py-3
            rounded-2xl
            border
            border-brand/10
            bg-white
            outline-none
            resize-none
            focus:border-brand/30
          "
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full py-4 mt-2"
      >
        {loading ? "Processing..." : "Buy Now"}
      </Button>
    </form>
  );
}