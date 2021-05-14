import {
  ContentLayout,
  PageLayout,
  SectionLayout,
  AuthLayout,
} from '../../lib/elements/layout/index';
import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          {/* <SectionLayout> */}
            <SignupContainer />
          {/* </SectionLayout> */}
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
