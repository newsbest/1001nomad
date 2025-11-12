import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Loader2 } from "lucide-react";

// WordPress Post Interface
interface WordPressPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  link: string;
  author: string;
  featured_image: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

// Custom hook to fetch posts
const usePosts = (url: string) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [url]);

  return { posts, loading, error };
};

// Post Card Component
const PostCard = ({ post }: { post: WordPressPost }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="hover-lift border-2 bg-card/80 backdrop-blur-sm h-full">
      <CardContent className="p-0 flex flex-col h-full">
        {post.featured_image && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            {post.categories.length > 0 && (
              <>
                <span>•</span>
                <span className="text-primary">{post.categories[0].name}</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-relaxed">
            {post.title}
          </h3>

          <div
            className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed flex-grow"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />

          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-auto"
          >
            ادامه مطلب
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

// Post Slider Component
const PostSlider = ({ title, url }: { title: string; url: string }) => {
  const { posts, loading, error } = usePosts(url);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        خطا در بارگذاری مطالب
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        مطلبی یافت نشد
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-center">{title}</h3>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {posts.map((post) => (
            <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <PostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-background -mt-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            اخبار و <span className="text-gradient-primary">مقالات</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تحلیل‌هایی متفاوت از آن‌چه در رسانه‌های رسمی می‌خوانید
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          <PostSlider
            title="آخرین اخبار"
            url="https://1001nomad.com/site/wp-json/custom/v1/posts-by-category/?category=news&per_page=5"
          />

          <PostSlider
            title="دیجیتال نومد"
            url="https://1001nomad.com/site/wp-json/custom/v1/posts-by-category/?category=digital-nomad&per_page=5"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;