import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Vishwa Vikas Masuna</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full-stack & AI-powered application developer!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a Computer Science graduate and developer specializing in
          full-stack web development and AI-powered applications with React,
          Node.js, Express.js, and MongoDB Atlas. I enjoy building scalable web
          applications, REST APIs, and LLM-driven tools using LangGraph and the
          Gemini, Cohere, OpenRouter, and Mistral APIs, with strong foundations
          in Java, Python, OOP, and Data Structures & Algorithms.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
