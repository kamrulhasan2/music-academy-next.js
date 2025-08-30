import webinars from '@/app/data/featured_webinars.json';
import Image from 'next/image';

interface WebinarsDetailsProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WebinarsDetailsProps) {
    const { slug } = await params;
    const webinar = webinars.data.find(item => item.slug === slug);

    if (!webinar) {
        return {
            title: "Webinar Not Found",
            description: "The requested course could not be found.",
        };
    }

    return {
        title: webinar.title,
        description: webinar.description,
    };
}

export default async function WebinarsDetails({ params }: WebinarsDetailsProps) {
    const { slug } = await params;
    const webinar = webinars.data.find(item => item.slug === slug);

    if (!webinar) {
        return (
            <div className="min-h-screen bg-black/[0.96] text-white flex items-center justify-center">
                <p className="text-xl">Webinar not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black/[0.96] py-12 pt-36">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="items-center justify-end md:w-1/2">
                        <Image
                            src={webinar.img}
                            alt={webinar.title}
                            width={300}
                            height={400}
                            className="items-center justify-center rounded-lg shadow-lg object-cover w-full h-[50vh] md:h-[80vh]"
                        />
                    </div>
                    <div className="md:w-1/2 text-white">
                        <h1 className="text-4xl font-bold mb-4">{webinar.title}</h1>
                        <i className="mb-4">{webinar.description}</i>
                        <p className="mb-4">{webinar.details}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, illo ipsa numquam doloremque porro perferendis iure soluta excepturi ad recusandae atque. Excepturi, dignissimos iste! Aut officiis adipisci iusto tempora, sequi dolorum nam atque amet, eveniet enim magnam laboriosam. Ut, laboriosam inventore. Tenetur, laboriosam, eligendi nesciunt amet porro similique id beatae officiis voluptatem corporis ullam? Voluptate quo at adipisci natus iusto, debitis harum sit sequi neque laudantium velit aspernatur quaerat, cupiditate voluptatibus ipsum tempora nulla qui officiis atque quisquam similique provident vitae. Dolores, voluptate voluptatibus. Repellat, incidunt. Velit veniam a accusamus quod veritatis amet distinctio commodi, rerum eius omnis fuga fugiat?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
