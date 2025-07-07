import SectionWrapper from "../layouts/section-wrapper";
import ProfilePicture from "./profile-pic";

const Hero = () => {
	return (
		<section>
			<div className="relative text-balance">
                <ProfilePicture />
                <SectionWrapper>
                    <h1 className="mx-auto max-w-2xl text-center font-medium text-4xl leading-tight tracking-tighter md:text-6xl md:leading-[64px]">
                        Hey, I&apos;m Leone! <br /> Welcome to my corner of the internet!
                    </h1>
                </SectionWrapper>
                <SectionWrapper>
                    <div className="mt-4 text-center md:mt-8">
                        <p className="text-muted-foreground leading-8">
                            I&apos;m a front-end developer with a love for design and a knack
                            for tinkering. This site is intentionally over-engineered and
                            serves as my playground for experimenting with new ideas and
                            seeing what sticks!
                        </p>
                    </div>
                </SectionWrapper>
            </div>
		</section>
	);
};

export default Hero;
