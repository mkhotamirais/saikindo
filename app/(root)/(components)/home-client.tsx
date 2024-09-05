import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Container, Title } from "@/components/wrapper";

const clientList = [
  { iconPath: "/images/clients/client1.png", label: "" },
  { iconPath: "/images/clients/client2.png", label: "" },
  { iconPath: "/images/clients/client3.png", label: "" },
  { iconPath: "/images/clients/client4.png", label: "" },
  { iconPath: "/images/clients/client5.png", label: "" },
  { iconPath: "/images/clients/client6.png", label: "" },
  { iconPath: "/images/clients/client7.png", label: "" },
  { iconPath: "/images/clients/client8.png", label: "" },
  { iconPath: "/images/clients/client9.png", label: "" },
];

export function HomeClient() {
  return (
    <section className="py-6">
      <Container>
        <div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientList.map((item, i) => (
              <Avatar key={i} className="rounded-none h-24 w-full">
                <AvatarImage src={item.iconPath} className="object-contain object-center" />
              </Avatar>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
