import { Banner } from "@/components/banner";
import Maintenence from "@/components/maintenence";
import { Container, H2 } from "@/components/wrapper";

export default function HealthPage() {
  return (
    <section className="container">
      <Maintenence />
    </section>
    // <div className="container">
    //   <Banner title="Health" image="/images/banner/storyset-health.png" />
    //   <div className="flex flex-col gap-4">
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Medical Equipment" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Medical Supply" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //   </div>
    // </div>
  );
}
