import ServicePageContent from "@/components/Services/ServicePageContent/ServicePageContent";

export const metadata = {
  title: "Services",
  description: "Services page here show my services details",
};

export default function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <ServicePageContent />
      </div>
    </section>
  );
}
