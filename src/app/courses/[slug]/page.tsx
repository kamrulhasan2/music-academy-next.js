import musicCourses from '@/app/data/music_courses.json';
import Image from 'next/image';

interface CourseDetailsProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseDetailsProps) {
    const { slug } = await params;
    const course = musicCourses.courses.find(course => course.slug === slug);

    if (!course) {
        return {
            title: "Course Not Found",
            description: "The requested course could not be found.",
        };
    }

    return {
        title: course.title,
        description: course.description,
    };
}

export default async function CourseDetails({ params }: CourseDetailsProps) {
    const { slug } = await params;
    const course = musicCourses.courses.find(course => course.slug === slug);

    if (!course) {
        return (
            <div className="min-h-screen bg-black/[0.96] text-white flex items-center justify-center">
                <p className="text-xl">Course not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black/[0.96] py-12 pt-36">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="items-center justify-end md:w-1/2">
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={300}
                            height={400}
                            className="items-center justify-center rounded-lg shadow-lg object-cover w-full h-[80vh]"
                        />
                    </div>
                    <div className="md:w-1/2 text-white">
                        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                        <p className="text-lg mb-4">{course.description}</p>
                        <p className="text-md mb-2"><strong>Instructor:</strong> {course.instructor}</p>
                        <p className="text-md mb-4"><strong>Price:</strong> ${course.price}</p>
                        
                        <button className="mt-4 px-6 py-3 rounded-md cursor-pointer bg-teal-600 text-white font-semibold hover:bg-teal-700 transition duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
