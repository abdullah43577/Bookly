import line from '../../../public/images/Line.png';
import Image from 'next/image';
import womanIMG from '../../../public/images/woman.png';

export default function WhatToLearn() {
  return (
    <section className="w-full p-8">
      <container className="container mx-auto mb-32 flex flex-col items-center">
        <container className="flex flex-col items-center my-8">
          <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground cardoFont">What will you learn?</h2>
          <Image src={line} alt="line" width={80} />
        </container>

        <container className="flex flex-col-reverse xl:flex-row items-center gap-16 mt-20">
          <container className="gridBox xl:w-1/2">
            <div className="bg-[#F4F8FF] p-8">
              <number className="p-2 bg-CTA text-headerBackground cardoFont rounded-full">01</number>
              <p className="cardoFont text-headerBackground font-bold mt-4">Use HDFS & Map Reduce for storing & analyzing data at scale</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <number className="p-2 bg-CTA text-headerBackground cardoFont rounded-full">02</number>
              <p className="cardoFont text-headerBackground font-bold mt-4">Consume streaming data using Spark Streaming, Flink, and Storm</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <number className="p-2 bg-CTA text-headerBackground cardoFont rounded-full">03</number>
              <p className="cardoFont text-headerBackground font-bold mt-4">Choose an appropriate data storage technology for your application</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <number className="p-2 bg-CTA text-headerBackground cardoFont rounded-full">04</number>
              <p className="cardoFont text-headerBackground font-bold mt-4">Analyze non-relational data using HBase, Cassandra and MongoDB</p>
            </div>
          </container>

          <Image src={womanIMG} alt="woman image" />
        </container>
      </container>
    </section>
  );
}
