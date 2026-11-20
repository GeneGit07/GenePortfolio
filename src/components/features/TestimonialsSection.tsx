const testimonials = [
  {
    quote: "TODO: Add an approved client testimonial.",
    name: "TODO: Add client name",
    project: "TODO: Add project or role",
  },
];

const readyTestimonials = testimonials.filter(
  (item) => !Object.values(item).some((value) => value.startsWith("TODO:")),
);

export default function TestimonialsSection() {
  if (readyTestimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Kind words</p>
          <h2 id="testimonials-title" className="display-2 mt-6">Testimonials</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {readyTestimonials.map((item) => (
            <figure key={item.name} className="service-card">
              <blockquote className="display-3">“{item.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-medium">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.project}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}