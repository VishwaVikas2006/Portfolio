import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has always been the cornerstone of my journey into the tech
          world. Pursuing a B.Tech in Computer Science Engineering at Sphoorthy
          Engineering College has provided me a strong foundation in computer
          science, programming, and software development.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My academic journey has been complemented by hands-on projects,
          internships, and coursework, enabling me to build practical skills and
          a deep understanding of modern web technologies.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/certifications"
        prevTitle="Experience"
        nextTitle="Certifications"
      />
    </>
  );
};
export default EducationPage;
