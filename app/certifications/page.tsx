import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { certifications } from '@/constants/certifications';

const CertificationsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Certifications</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Proof that I showed up and learned something!
        </PageHeaderHeading>
        <PageHeaderDescription>
          A collection of courses and certifications I've completed to strengthen
          my skills in full-stack development, data structures, and programming.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={certifications} />

      <Pager
        prevHref="/education"
        nextHref="/contact"
        prevTitle="Education"
        nextTitle="Contact"
      />
    </>
  );
};
export default CertificationsPage;
