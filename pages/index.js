import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => (
  <div className="mb-8 grid grid-cols-1 gap-y-12 lg:gap-y-16">
    <SliceZone {...props} resolver={resolver} />
  </div>
);

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "homepage",
  queryType: "single",
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "homepage",
  fallback: true,
});

export default Page;
