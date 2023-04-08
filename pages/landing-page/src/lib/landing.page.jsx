import { Button, Page } from '@app/shared';

export function LandingPage(props) {
  return (
    <Page>
      <h1>Landing Page</h1>
      <Button>Test</Button>
      <code>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </code>
    </Page>
  );
}