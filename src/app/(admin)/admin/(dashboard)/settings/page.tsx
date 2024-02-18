import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | C-DOC',
  description: 'Settings | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardSettings: React.FC = () => {
  return (
    <main>
      <h1>Settings</h1>
    </main>
  );
};

export default DashboardSettings;
