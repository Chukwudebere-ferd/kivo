export const categories = [
  { id: "for-you", label: "For You", icon: "sparkles" },
  { id: "tech", label: "Tech", icon: "hardware-chip" },
  { id: "science", label: "Science", icon: "flask" },
  { id: "design", label: "Design", icon: "color-palette" },
  { id: "business", label: "Business", icon: "briefcase" },
  { id: "health", label: "Health", icon: "fitness" },
  { id: "culture", label: "Culture", icon: "globe" },
  { id: "sports", label: "Sports", icon: "football" },
];

export type FeedItem = {
  id: string;
  category: string;
  categoryIcon: string;
  time: string;
  title: string;
  subtitle: string;
  content: string;
  mediaUrl?: string;
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;
  sharesCount: number;
};

export const feedItems: FeedItem[] = [
  {
    id: "1",
    category: "For You",
    categoryIcon: "sparkles",
    time: "3 min ago",
    title: "How AI is transforming the way we discover knowledge",
    subtitle:
      "The intersection of machine learning and information retrieval is creating a new paradigm for how we consume content.",
    content:
      "Artificial intelligence has begun reshaping how we find, consume, and retain information. Traditional search engines rely on keyword matching and link analysis, but modern AI systems understand context, intent, and even the user's reading habits.\n\nLarge language models now power recommendation systems that go beyond simply suggesting popular content. They analyze what you read, how long you spend on each topic, and what you choose to save or share. This creates a personalized knowledge graph that evolves with every interaction.\n\nThe shift from pull-based search to push-based discovery means users spend less time hunting for relevant content and more time actually learning. The challenge lies in avoiding filter bubbles while still delivering highly relevant recommendations.\n\nAs AI continues to improve, the line between search engines and personal knowledge assistants will blur. The future of discovery isn't about finding information, it is about having the right information find you.",
    mediaUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    likesCount: 2400,
    commentsCount: 142,
    bookmarksCount: 1100,
    sharesCount: 456,
  },
  {
    id: "2",
    category: "Tech",
    categoryIcon: "hardware-chip",
    time: "1 hour ago",
    title: "The future of quantum computing in 2026",
    subtitle:
      "Major breakthroughs in qubit stability are bringing us closer to practical quantum computers.",
    content:
      "Quantum computing has reached a critical inflection point. For decades, the field was dominated by theoretical advances and small-scale demonstrations. 2026 marks the year where practical quantum advantage is finally within reach.\n\nRecent breakthroughs in qubit coherence times have extended stable quantum states from microseconds to milliseconds. This may sound small, but it represents an order-of-magnitude improvement that unlocks new classes of algorithms.\n\nMajor technology companies have announced plans for fault-tolerant quantum systems within the next 18 months. These systems will be capable of running error-corrected computations at scales relevant for drug discovery, materials science, and cryptography.\n\nThe implications extend far beyond faster computing. Quantum sensors, quantum communication networks, and quantum-enhanced AI are all emerging from the lab and moving toward commercial deployment.\n\nFor developers and technologists, now is the time to start understanding quantum algorithms and how they might complement classical computing in the years ahead.",
    mediaUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600",
    likesCount: 1800,
    commentsCount: 89,
    bookmarksCount: 890,
    sharesCount: 312,
  },
  {
    id: "3",
    category: "Science",
    categoryIcon: "flask",
    time: "2 hours ago",
    title: "New study reveals the hidden structure of dark matter",
    subtitle:
      "Astrophysicists have mapped the largest-ever survey of dark matter distribution across the universe.",
    content:
      "An international team of astrophysicists has published the most detailed map of dark matter distribution ever created. Using data from the James Webb Space Telescope and the Euclid mission, researchers have mapped the invisible scaffolding that shapes the cosmos.\n\nThe study reveals unexpected filamentary structures that challenge existing models of cosmic evolution. Dark matter, which makes up approximately 85 percent of all matter in the universe, does not distribute itself randomly. It forms a cosmic web of dense nodes connected by thin filaments.\n\nWhat surprised the research team was the regularity of these structures at scales previously thought to be chaotic. This suggests that the underlying physics governing dark matter may be more uniform than current theories predict.\n\nThe findings have significant implications for our understanding of galaxy formation, the nature of dark matter particles, and the ultimate fate of the universe. Future surveys will focus on understanding how these structures evolve over cosmic time.",
    mediaUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    likesCount: 3100,
    commentsCount: 215,
    bookmarksCount: 2400,
    sharesCount: 1890,
  },
  {
    id: "4",
    category: "Design",
    categoryIcon: "color-palette",
    time: "5 hours ago",
    title: "Minimalism is not just a style, it is a philosophy",
    subtitle:
      "How reducing visual clutter can improve comprehension and user engagement in digital products.",
    content:
      "Minimalism in digital design is often misunderstood as simply using less. In reality, it is a philosophy that prioritizes clarity, purpose, and intentionality in every design decision.\n\nThe most effective minimal designs are not empty, they are focused. Every element that remains on screen must earn its place by serving a clear purpose. This approach forces designers to deeply understand what users actually need versus what stakeholders want to add.\n\nStudies consistently show that reducing visual noise improves comprehension by up to 40 percent. Users complete tasks faster, make fewer errors, and report higher satisfaction when interfaces are stripped of non-essential elements.\n\nBut minimalism is not about removing everything. It is about creating breathing room so that what remains can be fully appreciated. Typography, spacing, color, and motion all become more impactful when they are not competing for attention.\n\nThe best digital products of the past decade share this philosophy. They feel effortless because every pixel has been consciously considered.",
    likesCount: 956,
    commentsCount: 67,
    bookmarksCount: 430,
    sharesCount: 178,
  },
];

export function formatCount(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return k.toFixed(k % 1 === 0 ? 0 : 1).replace(".0", "") + "K";
  }
  return count.toString();
}
