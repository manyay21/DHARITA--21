import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { LayoutSuggestor } from '@/components/design-assistant/LayoutSuggestor';

export default function DesignAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-secondary/30 py-8">
        <LayoutSuggestor />
      </main>
      <Footer />
    </div>
  );
}
