import Instructors from "../components/Instructors";



function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black py-12 pt-28">
        <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
            About Us
        </h1>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white text-lg leading-relaxed mb-6">
                Welcome to the Music Academy, where passion for music meets excellence in education. We are a premier institution dedicated to nurturing the next generation of musicians, composers, and performers.
            </p>
            <p className="text-white text-lg leading-relaxed mb-6">
                Our academy was founded on the belief that music is a universal language that enriches lives and connects people from all walks of life. We strive to create a vibrant and inclusive community where students can explore their musical talents, develop their skills, and achieve their artistic goals.
            </p>
            <p className="text-white text-lg leading-relaxed mb-6">
                At the Music Academy, we offer a wide range of programs for all ages and skill levels, from beginner to advanced. Our curriculum is designed to provide a comprehensive and well-rounded music education, covering everything from music theory and history to performance and composition.
            </p>
            <p className="text-white text-lg leading-relaxed mb-6">
                Our faculty is composed of world-class musicians and educators who are passionate about teaching and dedicated to helping our students succeed. They bring a wealth of experience and expertise to the classroom, providing personalized instruction and mentorship to each and every student.
            </p>
            <p className="text-white text-lg leading-relaxed">
                We invite you to join our community and embark on a musical journey that will inspire, challenge, and transform you. Whether you are a budding musician or a seasoned performer, the Music Academy is the perfect place to cultivate your talent and share your love of music with the world.
            </p>
        </div>
        <Instructors />
    </div>
  )
}

export default AboutUsPage;