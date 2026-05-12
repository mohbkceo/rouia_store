export default function EmptyState({ title = "Nothing here", subtitle = "", action }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
      <div className="text-5xl mb-2">👟</div>
      <h3 className="font-display text-xl font-semibold text-brand">{title}</h3>
      {subtitle && <p className="text-sm text-brand/50 max-w-xs">{subtitle}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
