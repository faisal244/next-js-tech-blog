import {
	createImageUrlBuilder,
	createCurrentUserHook,
	createClient,
} from "next-sanity";

// Standard sanity config
// Don't forget token, to get a preview client and authenticated client
export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: "2021-03-25",
	useCdn: process.env.NODE_ENV === "production",
	// token: process.env.SANITY_API_TOKEN
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);
