import Image from 'next/image'
import KimchiRamen from "@/public/kimchi ramen.jpg"
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brian Zhang - Home',
}

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13'>
          Home
        </h1>
      </div>
      <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
        <div className='flex flex-col items-center pt-8'>
          <Image alt="Picture of Brian Zhang" src={KimchiRamen} className="h-48 w-48 rounded-full object-cover object-top"/>
          <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Brian Zhang</h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            My name is Brian. This is my favorite instant ramen, Samyang Kimchi Ramen.
          </p>
          <div className='flex space-x-5 pt-6'>
            <a href="https://github.com/bbrianzzhang" target="_blank">
            <svg viewBox="0 0 1024 1024" fill="currentColor" className='w-8 h-8 text-teal-500 hover:text-teal-600'>
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/bbrianzzhang/" target="_blank">
            <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className='w-8 h-8 text-teal-500 hover:text-teal-600'
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
    </svg>
            </a>
            <a href="mailto:bbrianzzhang@gmail.com" target="_blank">
            <svg fill="none" viewBox="0 0 24 24" className='w-8 h-8 text-teal-500 hover:text-teal-600'>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
        clipRule="evenodd"
      />
    </svg>
            </a>

          </div>
        </div>

        <div className='prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2'>
          <p>Hi! My name is Brian Zhang, and I am a third-year computer science student at the University of Waterloo. I&apos;m currently looking for opportunities to work in machine learning and full-stack development. My goal as a programmer is to make a difference and continue learning and developing my skills. 
          </p>
          <p>In the summer of 2024, I got the opportunity to intern at PlayStation! I learned a lot about web development, deployment pipelines and much more, all while getting to work at a company that inspired so much of my childhood. I&apos;m returning for a second term in January 2025 and I hope to learn even more new things and meet more new people.</p>
          <p>In my previous internships, I&apos;ve worked at a startup that created websites for clients and also maintained an AI chatbot for car dealerships. I also interned at a health and research lab, creating a machine learning model for detecting pain and helping users through physiotherapy exercises.
          </p>
          <p>In my spare time, I enjoy playing chess and TFT, reading about mythology and trying different types of instant ramen. I&apos;m also currently on exchange in Hong Kong so I like just walking around and exploring the city, especially at night (mostly to avoid the heat).
          </p>

        </div>
      </div>
    </div>
  )
}
