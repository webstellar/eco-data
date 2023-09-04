import { createClient, groq } from "next-sanity";
import { Page } from "@/types/Page";
import { Industry } from "@/types/Industry";
import { Publication } from "./../types/Publication";
import { Benefit } from "@/types/Benefit";
import clientConfig from "./config/client-config";

export async function getIndustries(): Promise<Industry[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'industry']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        content,
        dataVisuals,
        category,
        reportUrl,
        highlight[]{
          _id, 
          title,
          description
        }
    }
    `
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        'featuredImageOne': featuredImageOne.asset->url,
        'featuredImageTwo': featuredImageTwo.asset->url,
        'featuredImageThree': featuredImageThree.asset->url,
        excerpt,
        content,
        color,
        textcolor,
        benefits[]{
          _id,
          benefitName,
          benefitdescription,
          'icon': icon.asset->url,
        },
        benefit,
        benefitDescription,
        feature,
        features[]{
          featureTitle,
          featureDescription,
        },
        team[]{
          teamName,
          position,
          'profile': profile.asset->url
        }
    }
    `
  );
}
export async function getHomePages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && name == 'Home']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        'featuredImageOne': image.asset->url,
        'featuredImageTwo': image.asset->url,
        'featuredImageThree': image.asset->url,
        excerpt,
        content,
        color,
        textcolor,
        benefits[]{
          _id,
          benefitName,
          benefitdescription,
          'icon': icon.asset->url,
        },
        benefit,
        benefitDescription,
        feature,
        features[]{
          featureTitle,
          featureDescription,
        },
        team[]{
          teamName,
          position,
          'profile': profile.asset->url
        }
    }
    `
  );
}

export async function getPublications(): Promise<Publication[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'publication']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        content,
    }
    `
  );
}

export async function getBenefits(): Promise<Benefit[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'benefit']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        content,
        'icon': icon.asset->url
    }
    `
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
         _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        'featuredImageOne': featuredImageOne.asset->url,
        'featuredImageTwo': featuredImageTwo.asset->url,
        'featuredImageThree': featuredImageThree.asset->url,
        excerpt,
        content,
        color,
        textcolor,
        benefits[]{
          _id,
          benefitName,
          benefitdescription,
          'icon': icon.asset->url,
        },
        benefit,
        benefitDescription,
        feature,
        features[]{
          featureTitle,
          featureDescription,
        },
        team[]{
          teamName,
          position,
          'profile': profile.asset->url
        }
    }
    `,
    { slug }
  );
}
