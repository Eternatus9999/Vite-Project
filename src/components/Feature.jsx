import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoCard = ({ src, title, description, classname }) => {
    return (
        <div className='relative size-full'>
            <video src={src} autoPlay muted loop className='absolute left-0 top-0 size-full object-cover object-center' />
            <div className={`relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ${classname && classname}`}>
                <h1 className='bento-title special-font'>
                    {title}
                </h1>
                {description &&
                    <p className='mt-3 max-w-64 text-xs md:text-base'>
                        {description}
                    </p>}
            </div>
        </div>
    )
}

const Feature = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>Into Japan</p>
                    <pre className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Japanese culture is a rich tapestry woven from ancient traditions and modern influences.{<br />}
                        It features traditional arts such as the tea ceremony, ikebana, and calligraphy,{<br />}
                        and celebrates festivals like Hanami, Obon, and Tanabata.{<br />}
                        Japanese cuisine is world-renowned, offering delights like sushi, ramen, and tempura.{<br />}
                        The country balances Shinto and Buddhist religious practices with a modern society that values respect, harmony, and politeness.{<br />}
                        Japan is also a leader in technology and pop culture, influencing the world with its anime, manga, and innovations.{<br />}
                        The people embrace both traditional sports like sumo and modern outdoor activities, making Japan a unique blend of the old and the new.
                    </pre>
                </div>
                <a className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]' href='https://en.wikipedia.org/wiki/Culture_of_Japan'>
                    <BentoCard
                        src='videos/feature-1.mp4'
                        title={<>C<b>u</b>lt<b>u</b>re</>}
                        description="The tea ceremony (Sado), Ikebana, and Calligraphy (Shodo) exemplify Japan's traditional arts. Festivals like Hanami, Obon, and Tanabata highlight its cultural celebrations, emphasizing mindfulness, aesthetics, and community spirit."
                    />
                </a>
                <a className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7' id='more info' href='https://www.youtube.com/watch?v=nYPLF3Hi7v8'>
                    <div className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src='videos/feature-2.mp4'
                            title={<>S<b>u</b>nSet</>}
                        />
                    </div>
                    <a className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0' href='https://en.wikipedia.org/wiki/Flag_of_Japan'>
                        <BentoCard
                            src='videos/feature-3.mp4'
                            title={<>Fl<b>a</b>g</>}
                            classname={'!text-black'}
                        />
                    </a>
                    <a className='bento-tilt_1 me-14 md:col-span-1 md:me-0' href='https://en.wikipedia.org/wiki/Japanese_cuisine'>
                        <BentoCard
                            src='videos/feature-5.mp4'
                            title={<>C<b>u</b>isi<b>n</b>e</>}
                            description={'Japanese food is renowned for its fresh ingredients and delicate flavors, exemplified by sushi, ramen, and tempura. This cuisine is celebrated worldwide, blending traditional dishes with modern variations. Esteemed chefs and restaurants globally contribute to its international acclaim.'}
                            classname={'!text-black !text-bold'}
                        />
                    </a>
                    <a className='bento-tilt_2' href='https://en.wikipedia.org/wiki/Japan'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black'>
                                M<b>o</b>re Inf<b>o</b> Click Here
                            </h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end' />
                        </div>
                    </a>
                    <a className='bento-tilt_2' href='https://en.wikipedia.org/wiki/Anime'>
                        <video
                            src='videos/feature-4.mp4'
                            autoPlay
                            muted
                            loop
                            className='size-full object-cover object-center'
                        />
                    </a>
                </a>
            </div>
        </section>
    )
}

export default Feature