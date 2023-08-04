import line from '../../../public/images/Line.png';
import Image from 'next/image';
import womanIMG from '../../../public/images/woman.png';

export default function WhatToLearn() {
  return (
    <section className="w-full p-8">
      <div className="container mx-auto mb-32 flex flex-col items-center">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground cardoFont">What will you learn?</h2>
          <Image src={line} alt="line" width={80} />
        </div>

        <div className="flex flex-col-reverse xl:flex-row items-center gap-16 mt-20">
          <div className="gridBox xl:w-1/2">
            <div className="bg-[#F4F8FF] p-8">
              <div className="p-2 bg-CTA text-headerBackground cardoFont rounded-full inline-block">01</div>
              <p className="cardoFont text-headerBackground font-bold mt-4">Use HDFS & Map Reduce for storing & analyzing data at scale</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <div className="p-2 bg-CTA text-headerBackground cardoFont rounded-full inline-block">02</div>
              <p className="cardoFont text-headerBackground font-bold mt-4">Consume streaming data using Spark Streaming, Flink, and Storm</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <div className="p-2 bg-CTA text-headerBackground cardoFont rounded-full inline-block">03</div>
              <p className="cardoFont text-headerBackground font-bold mt-4">Choose an appropriate data storage technology for your application</p>
            </div>

            <div className="bg-[#F4F8FF] p-8">
              <div className="p-2 bg-CTA text-headerBackground cardoFont rounded-full inline-block">04</div>
              <p className="cardoFont text-headerBackground font-bold mt-4">Analyze non-relational data using HBase, Cassandra and MongoDB</p>
            </div>
          </div>

          <Image src={womanIMG} alt="woman image" />
        </div>
      </div>
    </section>
  );
}
