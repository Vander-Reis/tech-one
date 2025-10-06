import React, { useEffect, useMemo, useState } from 'react';

type CarouselItem = {
  src: string;
  alt: string;
};

type HorizontalCarouselProps = {
  items: CarouselItem[];
  intervalMs?: number;
  visibleCount?: number;
};

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  items,
  intervalMs = 1500,
  visibleCount = 2,
}) => {
  const safeItems = useMemo(() => (items && items.length > 0 ? items : []), [items]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safeItems.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [safeItems.length, intervalMs]);

  if (safeItems.length === 0) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      {Array.from({ length: visibleCount }).map((_, offset) => {
        const item = safeItems[(currentIndex + offset) % safeItems.length];
        const key = `${item.alt}-${offset}`;
        return (
          <div
            key={key}
            className="w-80 h-44 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center group hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-32 max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalCarousel;


