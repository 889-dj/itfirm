import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComp() {

  // const arrow = {
  //   width:'100%',
  //   backgroundColor:'red',
  //   textAlign:'center',
  //   clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);'
  // }
  const timeline = [
    { 'id': 1, "imgpath": "../../public/woman.jpg", "year": 2010, "heading": "Founded", "desc": "Founded by vishal singh established the company with a vision to revolutionize IT solutions." },
    { 'id': 2, "imgpath": "../../public/woman.jpg", "year": 2012, "heading": "First Huge Client", "desc": "The company landed its first large-scale client, marking a significant step toward growth." },
    { 'id': 3, "imgpath": "../../public/woman.jpg", "year": 2016, "heading": "Expansion", "desc": "The firm expanded its offerings by introducing scalable and secure cloud solutions for businesses." },
    { 'id': 4, "imgpath": "../../public/woman.jpg", "year": 2018, "heading": "Expanded Services", "desc": "Added mobile development to the service portfolio, offering custom app solutions for clients." },
    { 'id': 5, "imgpath": "../../public/woman.jpg", "year": 2023, "heading": "$2M in Revenue", "desc": "A major financial milestone was reached with over $2M in revenue, driven by innovative solutions." },
  ]

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {timeline.map((time) => (
          <CarouselItem key={time.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col items-center gap-y-8">
                    <div className="w-[30%] aspect-square">
                      <img src={time.imgpath} alt="timeline" className="w-full h-full aspect-square rounded-full" />
                    </div>
                    <div className="flex items-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      <p> -- {time.year} -- </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <div>
                        <p className="text-2xl font-bold text-center">{time.heading}</p>
                      </div>
                      <div>
                        <p className="text-md font-semibold text-gray-700 text-center">{time.desc}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
