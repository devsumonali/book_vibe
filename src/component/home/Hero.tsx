import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="mx-5 flex max-w-7xl flex-col items-center justify-between gap-10 rounded-3xl bg-[#f3f3f3] px-6 py-12 md:mx-auto md:min-h-96 md:w-5/6 md:flex-row md:px-12 lg:px-20">
            <div className="text-center md:text-left">
                <h1 className="font-serif text-4xl leading-snug font-bold text-[#131313] lg:text-5xl">
                    Books to freshen up
                    <br />
                    your bookshelf
                </h1>
                <Link
                    href="/listed-book"
                    className="mt-8 inline-block rounded-md bg-[#23be0a] px-5 py-3 font-sans text-sm font-bold text-white hover:bg-[#1da008]"
                >
                    View The List
                </Link>
            </div>
            <Image
                src="/images/hero_img.jpg"
                alt="The Dating Playbook for Men by Andrew Ferebee"
                width={318}
                height={394}
                className="h-64 w-auto shrink-0 object-contain md:h-72"
                loading="eager"
            />
        </section>
    );
};

export default Hero;
