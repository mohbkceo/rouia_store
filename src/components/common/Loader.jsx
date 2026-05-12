export default function Loader({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-8 h-8 border-2 border-brand/20 border-t-brand rounded-full animate-spin" />
      <p className="text-sm text-brand/40 tracking-wider uppercase">{message}</p>
    </div>
  );
}
