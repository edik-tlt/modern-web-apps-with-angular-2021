interface Feed {
    id: number;
    name: string;
    url: string;
    items: FeedItem[];
}

interface FeedItem {
    id: number;
    title: string;
    content: string;
    url: string;
}

export {Feed, FeedItem};