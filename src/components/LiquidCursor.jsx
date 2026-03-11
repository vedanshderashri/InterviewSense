import { useEffect, useRef } from 'react';

export default function LiquidCursor() {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);
  const requestRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;
    if (!cursor || !inner) return;

    const updateCursor = () => {
      position.current.x += (pointer.current.x - position.current.x) * 0.18;
      position.current.y += (pointer.current.y - position.current.y) * 0.18;

      cursor.style.setProperty('--cursor-x', `${position.current.x}px`);
      cursor.style.setProperty('--cursor-y', `${position.current.y}px`);

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    const onMouseMove = (event) => {
      pointer.current.x = event.clientX - 16;
      pointer.current.y = event.clientY - 16;

      // Ensure cursor becomes visible on first movement (avoids hidden state on load)
      if (!cursor.classList.contains('cursor--visible')) {
        cursor.classList.add('cursor--visible');
        requestRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const onPointerEnter = () => {
      cursor.classList.add('cursor--visible');
      requestRef.current = requestAnimationFrame(updateCursor);
    };

    const onPointerLeave = () => {
      cursor.classList.remove('cursor--visible');
      cancelAnimationFrame(requestRef.current);
    };

    const onHoverChange = (event) => {
      const target = event.target;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, label');
      const isHovering = Boolean(interactive);
      if (isHovering !== hovering.current) {
        hovering.current = isHovering;
        cursor.classList.toggle('cursor--active', isHovering);
        inner.classList.toggle('cursor__inner--active', isHovering);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onPointerEnter);
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('mouseover', onHoverChange);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onPointerEnter);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('mouseover', onHoverChange);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <div className="custom-cursor__inner" ref={innerRef} />
    </div>
  );
}
