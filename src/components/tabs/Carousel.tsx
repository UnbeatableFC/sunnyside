import { useIsMobile } from "@/hooks/isMobile";

export function Carousel() {
  const isMobile = useIsMobile();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* First column */}
      <div className="flex flex-1">
        <div className="flex-1">
          <img
            src={
              !isMobile
                ? "/desktop/image-gallery-milkbottles.jpg"
                : "/mobile/image-gallery-milkbottles.jpg"
            }
            alt="milk-bottle"
            className="object-contain w-full"
          />
        </div>
        <div className="flex-1">
          <img
            src={
              !isMobile
                ? "/desktop/image-gallery-orange.jpg"
                : "/mobile/image-gallery-orange.jpg"
            }
            alt="orange"
            className=" object-cover"
          />
        </div>
      </div>

      {/* Second column */}
      <div className="flex flex-1">
        <div className="flex-1">
          <img
            src={
              !isMobile
                ? "/desktop/image-gallery-cone.jpg"
                : "/mobile/image-gallery-cone.jpg"
            }
            alt="cone"
            className=" object-cover"
          />
        </div>

        <div className="flex-1">
          <img
            src={
              !isMobile
                ? "/desktop/image-gallery-sugarcubes.jpg"
                : "/mobile/image-gallery-sugar-cubes.jpg"
            }
            alt="sugar-cubes"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
}
