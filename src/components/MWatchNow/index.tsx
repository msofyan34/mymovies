import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface movieList {
  id: string;
  title: string;
  rdate: string;
  images: string;
}

function MWatchNow({ id, title, images, rdate }: movieList) {
  return (
    <div className="flex justify-center">
      <Link href={`/wnmovie/${id}`} className="cursor-pointer">
        <Card className="h-[350px] w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <CardHeader className="h-[80px]">
            <CardTitle className="text-center">{title}</CardTitle>
          </CardHeader>
          <Separator className="mb-2" />
          <CardContent className="grid gap-2 items-center">
            <Image
              src={images}
              alt={title}
              width={250}
              height={250}
              className="w-full h-[250px] object-fit"
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default MWatchNow;
