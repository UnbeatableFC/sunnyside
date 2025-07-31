import { useIsMobile } from "@/hooks/isMobile";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Hero() {
  const isMobile = useIsMobile();
  const mobile = "bg-[url(/src/assets/mobile/image-header.jpg)]";
  const desktop = "bg-[url(/src/assets/desktop/image-header.jpg)]";

  return (
    <div
      className={cn(
        "h-screen bg-cover bg-center bg-no-repeat relative",
        isMobile ? mobile : desktop
      )}
    >
      <nav className="flex relative items-center justify-between py-6 px-10 mx-auto">
        <div>
          <img
            src="/src/assets/logo.svg"
            alt="logo"
            className="h-8 w-18 md:w-28"
          />
        </div>
        <div>
          {isMobile ? (
            <>
              <Popover>
                <PopoverTrigger>
                  <button aria-label="Open menu">
                    <img
                      src="/src/assets/icon-hamburger.svg"
                      alt="Menu icon"
                    />
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  align="center" // may help horizontal centering depending on library
                  className=" flex flex-col items-center justify-center space-y-6 py-8 mt-5 mx-20"
                >
                  <Button
                    variant="ghost"
                    className="text-muted-foreground text-sm rounded-2xl w-fit"
                  >
                    About
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground text-sm rounded-2xl w-fit"
                  >
                    Services
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-muted-foreground text-sm rounded-2xl w-fit"
                  >
                    Project
                  </Button>
                  <Button className="bg-yellow-500 px-7 py-3 hover:bg-transparent/50  transition-all duration-200 text-black uppercase font-bold rounded-2xl w-fit">
                    Contact
                  </Button>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <div className="flex items-center gap-7">
              <Button
                variant={"ghost"}
                className="text-white text-sm rounded-2xl"
              >
                About
              </Button>
              <Button
                variant={"ghost"}
                className="text-white text-sm rounded-2xl"
              >
                Services
              </Button>
              <Button
                variant={"ghost"}
                className="text-white text-sm rounded-2xl"
              >
                Project
              </Button>
              <Button className="bg-white px-7 py-5 hover:bg-blue-100/60 cursor-pointer hover:text-white transition-all duration-200 text-black uppercase font-bold rounded-2xl">
                Contact
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Text */}
      <div className="relative pt-12 ">
        <h1 className="text-center text-6xl md:leading-0 md:text-7xl text-white font-bold tracking-wider">
          WE ARE CREATIVES
        </h1>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-35 right-47 md:top-65 md:right-152 z-10 justify-center items-center">
        <img
          src="/src/assets/icon-arrow-down.svg"
          alt="arrow"
          className="md:w-10 md:h-32"
        />
      </div>
    </div>
  );
}
