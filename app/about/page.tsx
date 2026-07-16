import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Vishwa</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a passionate Computer Science graduate with hands-on experience in
          full-stack web development and AI-powered application development. I
          build scalable web applications and REST APIs using React, Node.js,
          Express.js, and MongoDB Atlas, and I care about clean, responsive user
          interfaces.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With a strong foundation in Java, Python, Object-Oriented Programming,
          and Data Structures & Algorithms, I focus on writing efficient,
          maintainable code. I'm currently expanding my skills through internships
          at Real Variable Digital Asset Services and T-Home Fintech, and by
          building LLM-driven tools with LangGraph and the Gemini, Cohere,
          OpenRouter, and Mistral APIs.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I enjoy collaborating with teams, learning new
          technologies, and contributing to open-source projects to grow and give
          back to the developer community. I've solved 70+ LeetCode and 50+
          GeeksforGeeks problems and made 300+ GitHub contributions.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
