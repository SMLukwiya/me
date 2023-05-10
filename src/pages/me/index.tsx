import Layout from "@/components/Layout";
import Image from "next/image";


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
            ankles in my days, they nicknamed me "The Ankle Taker". Playing ball is something that 
            I picked up in secondary school
            I find that playing basketball also helps me stay focused and disciplined, which I 
            think translates well to my work as a software developer.
            `
    },
    {
        title: 'I have always wanted to mentor',
        text: `
            For a long time in my software development life, I have had this feeling that I 
            didn't know enough or had enough information to 
            write about. But growing up, my mother was a teacher in a local christian school, she always used
            to bring papers to grade back home and I would sit with her and read some of the answer approaches 
            for the pupils, and it was very interesting. I wanted to engage with them to learn how they come
            up with such interesting approaches. 
        `
    },
    {
        title: 'Talking at conferences',
        text:  `
            I've been following a lot of industry leaders and experts, and I've been really amazed by 
            the insights and perspectives they bring. I believe that speaking at technical conferences would not 
            only be a great opportunity for me to learn from other industry experts, but it would also allow me 
            to give back to the community that has given me so much. I'm confident that I would have valuable insights 
            and experiences to share, and I'm excited to start exploring speaking opportunities in the near future
            That's why I am giving a talk at my countries DevFest this year in December.
        `
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
                            <span className="text-2xl block">I love empowering minds, my own and anyone seeking, one line of code at a time.</span>
                        </h1>
                        <h1 className="mt-2 text-slate-300">Unpopular Opinion</h1>
                        <p className="text-slate-400">
                            Some may argue that 5 years is too short to claim seniority in development.
                            Which is a very valid argument.
                            But to me, seniority is something I strive for every single day of the week, and 
                            twice on the weekends😄. I take every waking moment as an opportunity to become more
                            senior in every aspect of the word, in coding skills, leadership, communication, thought process...
                        </p>
                    </div>
                    <div className="w-full md:w-[45%] flex justify-center">
                        <Image src="/me.jpeg" alt="me" width={350} height={410} className="rounded-full" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-10">
                    <div className="w-full md:w-[35%]">
                        <h1 className="text-slate-200 text-xl font-semibold">How I got to this point.</h1>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h1 className="text-2xl text-slate-300">I started from a small rural town in Northern Uganda.</h1>
                        <p className="text-slate-300">
                            I'm a firm believer that life is all about following your passions, where you start
                            must not define where you should end up,
                            and that's exactly what led me to where I am today. After initially studying 
                            biomedical engineering in college, I already knew that my true passion was 
                            for software development. 
                            After graduation, I began working as a biomedical engineer in a grade 3 local hospital. 
                            I saved up some money and decided to invest in a 5-week web development bootcamp, 
                            which turned out to be a life-changing experience for me.
                            I decided to take a leap of faith and switch my path, which led me down an exciting and rewarding path.
                            After the bootcamp, I continued to teach myself and dive deeper into the world of software development. 
                            I started focussing on learning everything I could about programming, and I was particularly inspired by 
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
                        {values.map((value) => <ValuesComponent {...value} />)}
                    </div>
                </div>
                <div>
                    <h1 className="text-slate-200 text-xl font-semibold">Fun facts about me</h1>
                    <div className="flex flex-wrap gap-2 justify-between">
                        {funFacts.map((fact) => <FunFacts {...fact} />)}
                    </div>
                </div>
                <div>
                    <h1></h1>
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

function FunFacts({title, text}: {title: string, text: string}) {
    return (
        <div className="bg-slate-800 w-full md:w-[45%] lg:w-[32%] p-5 rounded-md">
            <h1 className="text-slate-200 text-lg my-3">{title}</h1>
            <p className="text-slate-300">{text}</p>
        </div>
    )
}