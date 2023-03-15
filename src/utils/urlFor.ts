import { sanityClient } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";
function urlFor(source: any) {
    return imageUrlBuilder(sanityClient).image(source);
}
export default urlFor;