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
    <section>
      <Container>
        <div className="py-12">
          <Title title="Our Clients" />
          <div className="flex gap-4 flex-wrap justify-center">
            {clientList.map((item, i) => (
              <Avatar key={i} className="rounded-none size-32">
                <AvatarImage src={item.iconPath} className="object-contain object-center" />
              </Avatar>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
