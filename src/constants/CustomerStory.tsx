interface CustomerStoryCardProps {
  title: string;
  image: string;
  url: string;
  image_dark: string;
}

export const customerStory: Array<CustomerStoryCardProps> = [
  {
    url: "#",
    title:
      "Mendable switches from Pinecone to Supabase for PostgreSQL vector embeddings.",
    image:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Fmendableai.png&w=1920&q=75",
    image_dark:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Flight%2Fmendableai.png&w=1920&q=75",
  },
  {
    url: "#",
    title:
      "HappyTeams unlocks better performance and reduces cost with Supabase.",
    image:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Fhappyteams.png&w=1920&q=75",
    image_dark:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Flight%2Fhappyteams.png&w=1920&q=75",
  },
  {
    url: "#",
    title:
      "Xendit use Supabase and create a full solution shipped to production in less than one week.",
    image:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Fxendit.png&w=1920&q=75",
    image_dark:
      "https://supabase.com/_next/image?url=%2Fimages%2Fcustomers%2Flogos%2Flight%2Fxendit.png&w=1920&q=75",
  },
];
