"use client";

import { H2 } from "@/components/wrapper";
import { useUniform } from "@/hooks/use-uniform";
import { uniformList } from "@/lib/uniform-list";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ImageWithSkeleton } from "./uniform-image-skeleton";

const DATA_PER_PAGE = 10;

const transformHref = (url: string) => {
  const getUrl = new URL(url);
  const getId = new URLSearchParams(getUrl.search);
  const id = getId?.get("id");
  if (id) return `https://drive.google.com/uc?export=view&id=${id}`;
  return null;
};

const updatedUniformList = uniformList
  .map((item) => ({
    ...item,
    href: transformHref(item.href),
  }))
  .filter((item) => item.href);

export default function UniformProducts() {
  const { cat, currentPage, setCurrentPage } = useUniform();
  let totalPages = 1;

  let data = updatedUniformList;

  if (cat) {
    data = data.filter((item) => item.cat === cat);
    totalPages = Math.ceil(data.length / DATA_PER_PAGE);
  } else {
    totalPages = Math.ceil(updatedUniformList.length / DATA_PER_PAGE);
  }

  const indexOfLastPost = currentPage * DATA_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - DATA_PER_PAGE;
  data = data?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handlePrev = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <section id="our-uniforms" className="py-16 pt-0 scroll-mt-16 -translate-y-8">
      <div className="container">
        <H2>
          Our <span className="italic capitalize text-amber-500">{cat}</span> Uniforms
        </H2>
        {data.length > 0 && (
          <>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
              {data?.map((item, i) => (
                <div
                  key={i}
                  className="group hover:scale-105 rounded shadow hover:shadow-lg shadow-primary transition overflow-hidden mt-2"
                >
                  <Image src={item?.href as string} alt="uniform" width={500} height={500} priority />
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
              {data?.map((item, i) => (
                <ImageWithSkeleton key={i} src={item?.href as string} alt="uniform" />
              ))}
            </div>
            {updatedUniformList.length > DATA_PER_PAGE && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => handlePrev(e)}
                        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => handleNext(e)}
                        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
        {data.length === 0 && <p className="text-center italic">The products cannot be displayed at the moment</p>}
      </div>
    </section>
  );
}
