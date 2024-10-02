import Maintenence from "@/components/maintenence";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saikindo Power",
};

export default function PowerPage() {
  return (
    <section className="container">
      <Maintenence />
    </section>
    // <div className="container">
    //   <Banner title="Power" image="/images/banner/storyset-power.png" />
    //   <div className="flex flex-col gap-4">
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Maintenence" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="General Supply" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Fiber Optic And Telecommunication" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //   </div>
    // </div>
  );
}

// a.
// b.
// c.
