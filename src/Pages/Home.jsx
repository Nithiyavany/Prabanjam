import React from "react";

function Home() {
  // Hardcoded news data (mix of Tamil and English headlines)
  const news = [
    {
      title: " Breaking News: அரசு புதிய திட்டத்தை அறிமுகம் செய்தது",
      description:
        "இந்த புதிய திட்டம் நாட்டின் பொருளாதாரத்தை மேம்படுத்தும் என்று எதிர்பார்க்கப்படுகிறது.",
      url: "#",
      urlToImage: "https://via.placeholder.com/400x200?text=Breaking+News"
    },
    {
      title: "Tech Innovations 2025",
      description:
        "Latest advancements in technology are set to transform the future.",
      url: "#",
      urlToImage: "https://via.placeholder.com/400x200?text=Tech+News"
    },
    {
      title: "உள்ளூர் செய்திகள்: புதிய சமூக மையம் திறப்பு",
      description:
        "தாயாரான உள்ளூர் சமூக மையம் பல புதிய வசதிகளை வழங்குகிறது.",
      url: "#",
      urlToImage: "https://via.placeholder.com/400x200?text=Local+News"
    },
    {
      title: "Sports Update: Championship Highlights",
      description:
        "A thrilling finale led to a historic win in the championship match.",
      url: "#",
      urlToImage: "https://via.placeholder.com/400x200?text=Sports+News"
    },
    {
      title: "Health Tips: Stay Fit During Winter",
      description:
        "Experts share tips on maintaining health and wellness during the cold season.",
      url: "#",
      urlToImage: "https://via.placeholder.com/400x200?text=Health+News"
    }
  ];

  // Featured classifieds data
  const classifieds = [
    {
      title: "Job Opening: Software Developer",
      description: "Exciting opportunity for skilled developers in Chennai.",
      url: "#",
      image: "https://via.placeholder.com/300x150?text=Job+Ad"
    },
    {
      title: "Real Estate: Apartment for Sale",
      description: "Spacious apartment in downtown available at a competitive price.",
      url: "#",
      image: "https://via.placeholder.com/300x150?text=Real+Estate"
    }
  ];


  return (
    <div className="app-container p-4">
      {/* Breaking News Marquee */}
      <div className="breaking-news bg-red-500 text-white py-2 px-4 rounded-lg mb-4">
        <marquee behavior="scroll" direction="left" scrollamount="8" className="font-bold">
          {news[0].title}
        </marquee>
      </div>

      {/* Main Content Grid */}
      <div className="content-wrap grid grid-cols-12 gap-4">
        {/* Left Sidebar: Trending News & Featured Classifieds */}
        <aside className="sidebar col-span-3 bg-gray-100 p-4 rounded-lg space-y-6">
          {/* Trending News */}
         

          {/* Featured Classifieds */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b pb-2">💼 Featured Classifieds</h3>
            <ul className="space-y-2">
              {classifieds.map((ad, index) => (
                <li key={index} className="border-b pb-1">
                  <a href={ad.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    {ad.title}
                  </a>
                  <p className="text-sm">{ad.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Center: Latest News */}
        <main className="main-content col-span-6">
          <h2 className="text-lg font-bold mb-3 border-b pb-2">📰 Latest News</h2>
          <div className="grid grid-cols-2 gap-4">
            {news.map((item, index) => (
              <div key={index} className="p-3 bg-white rounded-lg shadow">
                {item.urlToImage && (
                  <img
                    src={item.urlToImage}
                    alt="News"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                )}
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar: Advertisement & Community Highlights */}
        <aside className="sidebar col-span-3 bg-gray-100 p-4 rounded-lg space-y-6">
          {/* Advertisement */}
          <div>
            <h3 className="text-lg font-bold mb-3 border-b pb-2">📢 Advertisement</h3>
            <div className="bg-gray-300 h-48 flex items-center justify-center text-lg font-semibold">
              Ad Banner
            </div>
          </div>

      
        </aside>
      </div>
    </div>
  );
}

export default Home;
