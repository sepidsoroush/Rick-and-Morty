export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex overflow-y-auto justify-center">
      {children}
    </section>
  );
}
