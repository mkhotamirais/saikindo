import { Banner } from "@/components/banner";
import Maintenence from "@/components/maintenence";
import { Container, H2 } from "@/components/wrapper";

export default function EventOrganizer() {
  return (
    <section className="container">
      <Maintenence />
    </section>
    // <div className="container">
    //   <Banner title="Event Organizer" image="/images/banner/storyset-event.png" />
    //   <div className="flex flex-col gap-4">
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Booth production" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Backdrop" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Outbound" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //     <div className="bg-white p-4 shadow rounded">
    //       <H2 className="" title="Gathering" />
    //       <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
    //     </div>
    //   </div>
    // </div>
  );
}
