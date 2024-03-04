import EditSettings from '@components/admin/settings/EditSettings/EditSettings';
import { getShopSettings } from '@lib/settings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | C-DOC',
  description: 'Settings | C-DOC',
  robots: {
    index: false,
    follow: false,
  }
};

const DashboardSettings: React.FC = async () => {
  const settings = await getShopSettings();
  return (
    <main>
      <EditSettings {...settings} />
    </main>
  );
};

export default DashboardSettings;
