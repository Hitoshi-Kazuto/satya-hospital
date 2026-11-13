/**
 * Mount point for the omnidimension chat widget.
 * Lifted above the sticky mobile action bar so the two never overlap.
 */
export function FloatingActions() {
  return (
    <div
      id="omni-widget-component"
      className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-6"
      style={{
        width: "60px",
        height: "60px",
        pointerEvents: "none",
        maxWidth: "60px",
        maxHeight: "60px",
      }}
    ></div>
  );
}
