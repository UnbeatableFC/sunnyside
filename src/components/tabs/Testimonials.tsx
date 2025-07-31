import { testimonials } from "@/lib/testimonials";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Testimonials() {
  return (
    <div className="px-25 py-36">
      <div className="text-center fraunces-700 tracking-[8px] text-xl font-bold text-muted-foreground/50">
        CLIENT TESTIMONIALS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-6 md:gap-3 sm:-mx-0 -mx-18 mt-8">
        {testimonials.map(({ name, image, position, sayings }) => (
          <Card className="justify-center items-center gap-y-10">
            <Avatar className="size-12">
              <AvatarImage src={`${image}`} />
              <AvatarFallback>
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <CardContent>
              <p className="text-center barlow-semibold text-muted-foreground text-sm font-semibold leading-6">
                {sayings}
              </p>
            </CardContent>

            <CardFooter className="flex flex-col">
              <p className="text-lg font-black fraunces-900">{name}</p>
              <p className="text-xs barlow-semibold text-gray-600/40">
                {position}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
