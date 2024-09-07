import { Banner } from "@/components/banner";
import { Container, H2 } from "@/components/wrapper";

export default function MerchandiserPage() {
  return (
    <div>
      <Container>
        <Banner title="Merchandiser" image="/images/banner/storyset-event.png" />
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Tote Bag" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Tumbler" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Hat" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Flag" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Doll" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="ID Card" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Layard" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Mug" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Souvenier" />
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
