import { headlineData } from '../../API/_data';
import { Card } from './Card';

export function HeadlineCards() {
  return (
    <section className="max-w-[103rem] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      {headlineData.map((item) => {
        return (
          <Card key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
        );
      })}
    </section>
  );
}
