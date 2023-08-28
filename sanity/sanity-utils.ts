import { createClient, groq } from "next-sanity";
import { Page } from "@/types/Page";
import { Industry } from "@/types/Industry";
import { Publication } from "./../types/Publication";
import { Benefit } from "@/types/Benefit";

export async function getIndustries(): Promise<Industry[]> {
  const client = createClient({
    projectId: "e6ghx5sn",
    dataset: "production",
    apiVersion: "2023-08-19",
  });

  return client.fetch(
    groq`*[_type = 'industry']{
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
  const client = createClient({
    projectId: "e6ghx5sn",
    dataset: "production",
    apiVersion: "2023-08-19",
  });

  return client.fetch(
    groq`*[_type = 'page']{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        excerpt,
        content,
        color,
        benefits[]{
          _id,
          benefitName,
          benefitDescription,
          'image': image.asset->url,
        },
        benefit,
        benefitDescription,
        feature,
        featureImages[]{
          'image': image.asset->url
        },
        features[]{
          featureTitle,
          featureDescription,
        },
        team[]{
          teamName,
          position,
          'image': image.asset->url
        }
    }
    `
  );
}

export async function getPublications(): Promise<Publication[]> {
  const client = createClient({
    projectId: "e6ghx5sn",
    dataset: "production",
    apiVersion: "2023-08-19",
  });

  return client.fetch(
    groq`*[_type = 'publication']{
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
  const client = createClient({
    projectId: "e6ghx5sn",
    dataset: "production",
    apiVersion: "2023-08-19",
  });

  return client.fetch(
    groq`*[_type = 'benefit']{
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
