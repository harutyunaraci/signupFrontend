import {
  ContentLayout,
  PageLayout,
  SectionLayout,
  UsersLayout,
} from '../../lib/elements/layout/index';
import { UsersContainer } from './users.container';

export function UsersPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <UsersLayout>
          {/* <SectionLayout> */}
            <UsersContainer />
          {/* </SectionLayout> */}
        </UsersLayout>
      </PageLayout>
    </ContentLayout>
  );
}