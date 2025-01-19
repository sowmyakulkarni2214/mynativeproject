export type proctoList = {
    item: {
        id: string;
        name: string;
        country: string;
        age: string;
        rating: number;
        sports: string[];
        imageUrl: string;
    }
}

export type  SpeakersProps= {
    id: string,
    name: string,
    topic: string,
    bio: string,
    image: string|undefined,
  };