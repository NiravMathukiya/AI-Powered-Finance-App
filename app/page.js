import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      {/* active users section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {
              statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* fecture section  */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Evevry things you need to finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              featuresData.map((fecture, index) => (
                <Card key={index} className={"p-6"}>

                  <CardContent className={"space-y-4 pt-4"}>
                    {fecture.icon}
                    <h3>{fecture.title}</h3>
                    <p className="text-gray-600">{fecture.description}</p>
                  </CardContent>

                </Card>
              ))

            }
          </div>
        </div>
      </section>


      {/*  thired section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((howItWork, index) => (

              <div className=" text-center" key={index}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {howItWork.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{howItWork.title}</h3>
                <p className="text-gray-600">{howItWork.description} </p>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* testimonials */}


      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              testimonialsData.map((testimonial, index) => (
                <Card key={index} className={"p-6"}>

                  <CardContent className="pt-4">
                    <div className="flex items-center mb-4 ">
                      <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                      <div className="mb-2 ml-4">
                        <div className="font-semibold ">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>

                </Card>
              ))

            }
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
            <div className="conatiner mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-center mb-4 text-white">Ready to Take Control of Your Finances ? </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto ">
                Join thounsand of Users who are already managing their finances smarter with fin welth
              </p>
              <Link href="/dashboard">
              <Button size={"lg"} className={"bg-white text-blue-600 hover:bg-blue-50 animate-bounce"} >Start Free Trial</Button>
              </Link>
            </div>
      </section>

    </div>

  );
}
