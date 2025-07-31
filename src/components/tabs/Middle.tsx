import { useIsMobile } from "@/hooks/isMobile";
import { cn } from "@/lib/utils";

export function Middle() {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col">
      {/* Div 1 */}
      <div className="flex flex-col-reverse md:flex-row">
        <div className="items-center justify-center flex flex-col flex-1">
          <div className="max-w-[370px] flex p-10 mx-10 md:p-0 md:mx-0 items-center md:items-start justify-center text-center md:text-start flex-col gap-y-6">
            <h2 className="text-4xl fraunces-900 font-bold">
              Transform Your <br /> Brand
            </h2>
            <p className="text-sm barlow-semibold text-muted-foreground leading-6 font-bold">
              We are a full-service creative agency specializing in
              helping brands grow fast. Engage your clients through
              compelling visuals that do most of the marketing for
              you.
            </p>
            <a
              href="#"
              className="uppercase font-bold tracking-wide fraunces-700 rounded-yellow-underline w-fit"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={
              isMobile
                ? "/src/assets/mobile/image-transform.jpg"
                : "/src/assets/desktop/image-transform.jpg"
            }
            alt="transform"
            className="h-120 w-full"
          />
        </div>
      </div>

      {/* Div 2 */}
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <img
            src={
              isMobile
                ? "/src/assets/mobile/image-stand-out.jpg"
                : "/src/assets/desktop/image-stand-out.jpg"
            }
            alt="stand-out"
            className="h-120 w-full"
          />
        </div>

        <div className="items-center justify-center flex flex-col flex-1">
          <div className="max-w-[370px] flex flex-col p-10 mx-8 items-center md:items-start md:p-0 md:mx-0 gap-y-6 text-center md:text-start">
            <h2 className="text-4xl fraunces-900 font-bold">
              Stand out to the right audience
            </h2>
            <p className="text-sm barlow-semibold text-muted-foreground leading-6 font-bold">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll
              build and extend your brand in digital places.
            </p>
            <a
              href="#"
              className="uppercase font-bold tracking-wide fraunces-700 rounded-pink-underline w-fit"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Div 3 */}
      <div className="flex flex-col md:flex-row">
        <div
          className={cn(
            "bg-cover bg-no-repeat h-130 flex-1 items-center justify-center",
            isMobile
              ? "bg-[url(/src/assets/mobile/image-graphic-design.jpg)]"
              : "bg-[url(/src/assets/desktop/image-graphic-design.jpg)]"
          )}
        >
          <div className="md:mt-88 mt-96 pb-8 md:pb-0 flex flex-col gap-y-4 max-w-[300px] mx-auto text-center ">
            <h2 className="text-green-800 fraunces-700 text-3xl font-bold">
              Graphic design
            </h2>
            <p className="text-sm font-semibold barlow-semibold text-green-800/60">
              Great design makes you memorable. We deliver artwork
              that underscores your brand message and captures
              potential clients’ attention.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "bg-cover bg-no-repeat h-130 flex-1 items-center justify-center",
            isMobile
              ? "bg-[url(/src/assets/mobile/image-photography.jpg)]"
              : "bg-[url(/src/assets/desktop/image-photography.jpg)]"
          )}
        >
          <div className="md:mt-88 mt-96 pb-8 md:pb-0 flex flex-col gap-y-4 max-w-[300px] mx-auto text-center ">
            <h2 className="text-blue-800 fraunces-700 text-3xl font-bold">
              Photography
            </h2>
            <p className="text-sm font-semibold barlow-semibold text-blue-800/60">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
