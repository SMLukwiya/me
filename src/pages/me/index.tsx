import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const values = [
    {
        title: 'Integrity',
        text: `It's crucial to approach work with honesty and integrity, 
            whether working on a personal project or a team project. 
            This means taking responsibility for mistakes, being transparent about progress, 
            and treating colleagues and clients with respect and professionalism.
            `
    },
    {
        title: 'Kindness',
        text: ` kindness is a value that goes a long way in one's personal 
            and professional life. In a field that is often associated with technical 
            skills and expertise, it can be easy to overlook the importance of emotional intelligence 
            and interpersonal communication. Kindness as well extends beyond the workplace, we have the opportunity 
            to create products and services that improve lives by prioritizing user experience and designing with empathy.`
    },
    {
        title: 'Continuous learning',
        text: `Technology is constantly evolving, which means there is constantly a need 
            to be committed to learning and growing throughout one's career. 
            Keep up with the latest trends and developments in your field, attend conferences and 
            workshops, and always be open to feedback and new ideas.`
    },
    {
        title: 'Collaboration',
        text: `As a software developer, one is likely work with other developers, 
            designers, project managers, and clients. This means that one needs to be a team 
            player who can communicate effectively, listen actively, 
            and work collaboratively to achieve shared goals. Cultivate a positive attitude, 
            be willing to compromise, and be open to constructive criticism.
        `
    },
]

const funFacts = [
    {
        title: 'Basketball and Track',
        text: `Outside of work, I like to play competitive basketball and run track sometimes.
            I've been playing for several years and I have some mean handles, I have twisted many
            ankles in my days, so it's best to move with care near me😄. Playing ball is something that 
            I picked up in secondary school
            I find that playing basketball also helps me stay focused and disciplined, which I 
            think translates well to my work as a software developer.
            `,
        iconPath: <path d="M86.6 64c32.4-28.5 72-49 115.7-58.4C206 19.1 208 33.3 208 48c0 38.4-13.5 73.7-36.1 101.3L86.6 64zM64 86.6l85.2 85.2C121.7 194.5 86.4 208 48 208c-14.7 0-28.9-2-42.4-5.7C15 158.6 35.5 119 64 86.6zM256 0c64.9 0 124.2 24.2 169.4 64L256 233.4 194.6 172C222.9 138.5 240 95.3 240 48c0-16.2-2-32-5.8-47.1A263 263 0 01256 0zM48 240c47.3 0 90.5-17.1 124-45.4l61.4 61.4L64 425.4C24.2 380.2 0 320.9 0 256c0-7.3.3-14.6.9-21.8C16 238 31.8 240 48 240zm463.1 37.8C496 274 480.2 272 464 272c-47.3 0-90.5 17.1-124 45.4L278.6 256 448 86.6c39.8 45.1 64 104.4 64 169.4 0 7.3-.3 14.6-.9 21.8zm-4.7 31.9C497 353.4 476.5 393 448 425.4l-85.2-85.2C390.3 317.5 425.6 304 464 304c14.7 0 28.9 2 42.4 5.7zm-166.3 53l85.3 85.3c-32.4 28.5-72 49-115.7 58.4-3.7-13.5-5.7-27.7-5.7-42.4 0-38.4 13.5-73.7 36.1-101.3zM317.4 340c-28.3 33.5-45.4 76.7-45.4 124 0 16.2 2 32 5.8 47.1-7.2.6-14.5.9-21.8.9-64.9 0-124.2-24.2-169.4-64L256 278.6l61.4 61.4z" />
    },
    {
        title: 'About mentorship',
        text: `
            For a long time in my software development journey, I had feelings of doubt, I 
            didn't think I knew enough or had enough information to 
            write about. But growing up, my mother used to teach at a local christian school and she always brought
            back papers to grade from home. I would sit with her and read some of the answer approaches 
            for the pupils, and it was very interesting. I wanted to engage with them to learn how they come
            up with such interesting approaches,😄". 
        `,
        iconPath: <path d="M288 0h112c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-80v15.5l90.3 64.5H512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H336V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v112H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h101.7L256 95.5V32c0-17.7 14.3-32 32-32zm48 240c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM80 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H80zm368 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zM80 352c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H80zm384 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32z" />
    },
    {
        title: 'About Speaking',
        text:  `
            I've been following a lot of industry leaders and experts, and I've been really amazed by 
            the insights and perspectives they bring. I believe that speaking at technical conferences would not 
            only be a great opportunity for me to learn from other industry experts, but it would also allow me 
            to give back to the community that has given me so much. I'm confident that I would have valuable insights 
            and experiences to share, and I'm excited to start exploring speaking opportunities in the near future
            That's why I am giving a talk at my countries DevFest this year in December.
        `,
        iconPath: <path d="M244.2 346.79c2.4-12.3-12-30-32.4-48.7-20.9-19.2-48.2-39.1-63.4-46.6-21.7-12-41.7-1.8-46.3 22.7-5 26.2 0 51.4 14.5 73.9 10.2 15.5 25.4 22.7 43.4 24 11.6.6 52.5 2.2 61.7-1 11.9-4.3 20.1-11.8 22.5-24.3zm205 20.8a5.22 5.22 0 00-8.3 2.4c-8 25.4-44.7 112.5-172.1 121.5-149.7 10.5 80.3 43.6 145.4-6.4 22.7-17.4 47.6-35 46.6-85.4-.4-10.1-4.9-26.69-11.6-32.1zm62-122.4c-.3-18.9-8.6-33.4-26-42.2-2.9-1.3-5-2.7-5.9-6.4A222.64 222.64 0 00438.9 103c-1.1-1.5-3.5-3.2-2.2-5 8.5-11.5-.3-18-7-24.4Q321.4-31.11 177.4 13.09c-40.1 12.3-73.9 35.6-102 67.4-4 4.3-6.7 9.1-3 14.5 3 4 1.3 6.2-1 9.3C51.6 132 38.2 162.59 32.1 196c-.7 4.3-2.9 6-6.4 7.8-14.2 7-22.5 18.5-24.9 34L0 264.29v20.9c0 30.8 21 50.4 51.8 49 7.7-.3 11.7-4.3 12-11.5 2-77.5-2.4-95.4 3.7-125.8C92.1 72.39 234.3 5 345.3 65.39 411.4 102 445.7 159 447.6 234.79c.8 28.2 0 56.5 0 84.6 0 7 2.2 12.5 9.4 14.2 24.1 5 49.2-12 53.2-36.7 2.9-17.1 1-34.5 1-51.7zm-159.6 131.5c36.5 2.8 59.3-28.5 58.4-60.5-2.1-45.2-66.2-16.5-87.8-8-73.2 28.1-45 54.9-22.2 60.8z" />
    }

]

export default function Me() {
    return (
        <Layout>
            <div className="w-full md:w-3/4 mx-auto px-10">
                <div className="flex items-center justify-between flex-wrap w-full mb-10">
                    <div className="w-full md:w-[45%]">
                        <h1 className="w-full text-3xl text-slate-200">
                            Hello, my name is Lukwiya. I am a full stack software developer.
                            <span className="text-2xl block text-slate-300">I love empowering minds, my own and anyone seeking, one line of code at a time.</span>
                        </h1>
                        {/* <h1 className="mt-2 text-slate-300">Unpopular Opinion</h1>
                        <p className="text-slate-400">
                            Some may argue that 5 years is too short to claim seniority in development.
                            Which is a very valid argument.
                            But to me, seniority is something I strive for every single day of the week, and 
                            twice on the weekends😄. I take every waking moment as an opportunity to become more
                            senior in every aspect of the word, in coding skills, leadership, communication, thought process...
                        </p> */}
                    </div>
                    <div className="w-full md:w-[45%] flex justify-center">
                        <Image src="/me.jpeg" alt="me" width={320} height={390} className="rounded-full" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-10">
                    <div className="w-full md:w-[35%]">
                        <h1 className="text-slate-200 text-xl font-semibold">How I got to this point.</h1>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h1 className="text-2xl text-slate-300">My transformation from field plumbing to biomedical engineer to software developer.</h1>
                        <p className="text-slate-300">
                            I'm a firm believer that life is all about following your passions, where you start
                            must not define where you should end up,
                            and that's exactly what led me to where I am today.
                            I worked as a field plumber to partially pay for my college tuition. While studying 
                            biomedical engineering in college, I already knew that my true passion was 
                            for software development, I just didn't know how to start.
                            After graduation, I worked for a year as a biomedical engineer in a grade 3 hospital in northern uganda. 
                            I saved up money and invested in a 5-week web development bootcamp, 
                            which turned out to be a life-changing experience for me.
                            I decided to take a leap of faith and switch my path, which led me down an exciting and rewarding path.
                            After the bootcamp, I continued to teach myself and dive deeper into the world of software development. 
                            I started focussing on learning everything I could about programming, and I draw inspiration from 
                            developers like Kent C Dodds. I started studying React, React Native, and Node.js
                            Looking back on my journey so far, I'm proud of how far I've come and excited about what the future holds. 
                            I know that there will always be new challenges and opportunities to learn and grow, and I'm eager to 
                            continue pursuing my passion for software development.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-slate-100 text-xl font-semibold mb-2">Some values I live by</h1>
                    <div className="flex flex-wrap gap-2 justify-between">
                        {values.map((value) => <ValuesComponent key={value.title} {...value} />)}
                    </div>
                </div>
                <div>
                    <h1 className="text-slate-200 text-xl font-semibold">Fun facts</h1>
                    <div className="flex flex-wrap gap-2 justify-between">
                        {funFacts.map((fact) => <FunFacts key={fact.title} {...fact} />)}
                    </div>
                </div>
                <hr className="bg-slate-500 my-4" />
                <div className="flex flex-wrap justify-between mt-4">
                    <div>
                        <h1 className="text-2xl text-slate-300">SMLukwiya</h1>
                        <div className="flex gap-2">
                            <Link href="https://twitter.com/LSundaymorgan" target="_blank">
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="rgb(148 163 184)"
                                    height="2em"
                                    width="2em"
                                    >
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/lukwiya-sunday-morgan-056aa9130/" target="_blank">
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="rgb(148 163 184)"
                                    height="2em"
                                    width="2em"
                                    >
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                </svg>
                            </Link>
                            <Link href="https://github.com/SMLukwiya" target="_blank">
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="rgb(148 163 184)"
                                    height="2em"
                                    width="2em"
                                    >
                                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-slate-300 text-lg">Contact Me</h1>
                        <a 
                            className="cursor-pointer bg-slate-300 text-slate-800 p-1 rounded-md"
                            onClick={() => window.open('mailto:sundaymorganl@gmail.com?subject=Subject&body=Body%20goes%20here')}
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function ValuesComponent({title, text}: {title: string, text: string}) {
    return (
        <div className="w-full md:w-[45%] lg:w-[23%]">
            <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
            <p className="text-slate-300">{text}</p>
        </div>
    )
}

function FunFacts({title, text, iconPath}: {title: string, text: string, iconPath: React.ReactNode}) {
    return (
        <div className="bg-slate-800 w-full md:w-[45%] lg:w-[32%] p-5 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-slate-200 text-lg my-3">{title}</h1>
                <svg
                    viewBox="0 0 512 512"
                    fill="rgb(226 232 240)"
                    height="2em"
                    width="2em"
                    >
                    {iconPath}
                </svg>
            </div>
            <p className="text-slate-300">{text}</p>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}