import Link from "next/link";
import { Logo } from "./Logo";
import { contactUsMenu, followUsMenu, linksMenu } from "@/lib/menu";

export function Footer() {
  return (
    <footer className="font-ptsans">
      <div className="bg-muted">
        <div className="container mx-auto py-12 flex flex-col md:grid md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Logo />
            <div className="space-y-4 mt-4">
              {contactUsMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  title={item.title}
                  className="text-sm hover:text-primary transition flex items-center gap-2 max-w-fit"
                >
                  {item?.icon && <item.icon size={16} className="min-w-max" />}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-8 sm:mt-0">
            {linksMenu.map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-lg font-bold font-josefin">{item.title}</h4>
                <div className="space-y-2 flex flex-col">
                  {item.menus.map((menu, i) => (
                    <Link
                      key={i}
                      href={menu.href}
                      title={menu.label}
                      className="font-ptsans text-sm hover:text-primary transition w-fit text-muted-foreground"
                    >
                      {menu.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <small className="min-w-max font-ptsans">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              title="homepage saikindosg"
              href="https://saikindo.co.id"
              className="font-semibold text-primary hover:underline"
            >
              PT Saikindo Surya Gumiwang
            </a>
          </small>
          <div className={``}>
            <div className="flex gap-4">
              {followUsMenu.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  title={item.title}
                  className="bg-primary rounded-full p-2 hover:scale-110 transition"
                >
                  <item.icon size={14} className="text-zinc-900" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
