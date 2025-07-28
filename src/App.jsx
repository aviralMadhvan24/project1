import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaMusic, FaVolumeMute, FaVolumeUp, FaStar, FaLockOpen } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [openLetter, setOpenLetter] = useState(null);
  const [hearts, setHearts] = useState([]);
  const containerRef = useRef(null);

  // Background music
  useEffect(() => {
    const audio = new Audio("/music.mp3"); // Replace with your music file path
    audio.loop = true;
    if (isMusicPlaying) audio.play();
    else audio.pause();
    return () => audio.pause();
  }, [isMusicPlaying]);

  // Floating hearts effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (hearts.length < 30) {
        const newHeart = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: -50,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`
        };
        setHearts(prev => [...prev, newHeart]);
      }
    }, 300);

    const moveHearts = setInterval(() => {
      setHearts(prev => 
        prev.map(heart => ({
          ...heart,
          y: heart.y + heart.speed
        })).filter(heart => heart.y < window.innerHeight + 100)
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(moveHearts);
    };
  }, [hearts.length]);

  // Check password
  const checkPassword = () => {
    if (password.toLowerCase() === "bakbak" ) {
      setIsPasswordCorrect(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Reasons I Love You
  const loveReasons = [
    "The way you smile when you're trying not to laugh",
    "How you always know when I need a hug",
    "Your terrible but adorable jokes",
    "The way you steal my fries but kiss me after",
    "Your passion for the little things in life",
    "How you make even boring days feel special",
    "The sound of your laughter filling the room",
    "How you look when you first wake up in the morning",
    "Your unwavering support in everything I do",
    "The way your eyes light up when you talk about things you love",
    "Your ability to make me feel safe and loved",
    "The cute little dance you do when you're happy",
    "And always your thicc thighs that I love so much",
    "Your naughty side that keeps things exciting",
    "The way you always find the silver lining in every situation",
  ];

  // Timeline events
  const timelineEvents = [
    {
      date: "July (Saal nhi yaad shyd mai 12th me tha )",
      title: "The Day We Met",
      description: "You heard my terrible singing",
      emoji: "💘"
    },
    
    {
      date: "December 2021",
      title: "First 'I Love You'",
      description: "U REALLY THOUGHT MUJHE YE SAB YAAD HOGA :) aage sab ai se likhva diya hai so dont mind :)).",
      emoji: "💌"
    },
    {
      date: "March 2022",
      title: "First Trip Together",
      description: "Getting lost in the mountains but finding our way together.",
      emoji: "🗻"
    },
    {
      date: "July 2022",
      title: "Meeting Your Family",
      description: "I WISHHH ",
      emoji: "👨‍👩‍👧"
    }
  ];

  // Letters content
  const letters = [
    {
      title: "Open when you miss me",
      content: "My dearest ashi , I miss you too. Remember that time we stayed up all night talking? I'm looking at the stars right now, knowing you're seeing the same sky. Our love transcends distance. Close your eyes and feel my arms around you. I'll be home soon. Forever yours."
    },
    {
      title: "Open when you're sad",
      content: "WHO TF MADE U SAD ....I NEED NAMES ...(if it's me then it's ok 😆)"
    },
    {
      title: "Open when you need a laugh",
      content: 'SHEESHA DEKH LENA 🤣🤣🤣🤣😆'
    }
  ];

  // Trigger confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 text-purple-900 overflow-x-hidden"
      ref={containerRef}
    >
      {/* Floating hearts */}
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
            color: heart.color
          }}
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Music Toggle */}
      <motion.button
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
        className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </motion.button>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 z-0" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          >
            Our Eternal Love Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mb-8 text-purple-700 font-medium"
          >
            Three magical years of love, laughter, and forever memories
          </motion.p>
          
          <motion.div
            animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <FaHeart className="text-pink-500 text-5xl md:text-6xl animate-pulse" />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-purple-600">Scroll down for our journey</span>
          <div className="w-1 h-8 bg-pink-500 mx-auto mt-2 rounded-full"></div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-purple-500 transform -translate-x-1/2 z-0"></div>
        
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Journey Together
        </motion.h2>
        
        <div className="space-y-16 relative z-10">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className={`flex-1 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? "bg-gradient-to-r from-pink-50 to-purple-50" : "bg-gradient-to-r from-purple-50 to-pink-50"} border border-pink-200`}>
                <div className="flex items-center gap-3 mb-2">
                  <FaStar className="text-yellow-400 text-lg" />
                  <h3 className="text-2xl font-semibold text-purple-800">{event.title}</h3>
                </div>
                <p className="text-pink-600 font-medium">{event.date}</p>
                <p className="mt-3 text-purple-700">{event.description}</p>
              </div>
              
              <motion.div 
                className="w-20 h-20 rounded-full flex items-center justify-center bg-white border-4 border-pink-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-4xl">{event.emoji}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reasons I Love You */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reasons I Adore You
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loveReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)"
                }}
                className="bg-white p-5 rounded-xl border border-pink-200 shadow-md"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="text-pink-500 mt-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ❤️
                  </motion.div>
                  <p className="text-purple-800 font-medium">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Letters From My Heart
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-lg ${openLetter === index ? "md:col-span-3" : ""}`}
            >
              <motion.div
                whileHover={{ scale: openLetter === null ? 1.03 : 1 }}
                whileTap={{ scale: openLetter === null ? 0.98 : 1 }}
                onClick={() => setOpenLetter(openLetter === index ? null : index)}
                className={`cursor-pointer p-6 text-center ${index === 0 ? "bg-gradient-to-r from-pink-100 to-pink-200" : index === 1 ? "bg-gradient-to-r from-purple-100 to-purple-200" : "bg-gradient-to-r from-blue-100 to-blue-200"}`}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ rotate: openLetter === index ? [0, 10, -10, 0] : 0 }}
                >
                  ✉️
                </motion.div>
                <p className="font-bold text-xl text-purple-900 mb-2">{letter.title}</p>
                <motion.div
                  className="text-sm text-purple-700 flex items-center justify-center gap-1"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <span>Click to open</span>
                  <FaHeart className="text-pink-500" />
                </motion.div>
              </motion.div>
              
              <AnimatePresence>
                {openLetter === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white p-6 border-t-2 border-pink-300"
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="text-lg text-purple-800 leading-relaxed italic">
                        {letter.content}
                      </div>
                      <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                      </div>
                      <p className="text-center mt-4 text-pink-600 font-medium">Forever yours</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Password-Protected Surprise */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-purple-50 to-pink-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-2xl shadow-xl border-2 border-pink-300"
        >
          <motion.h2 
            className="text-3xl font-bold mb-6 text-purple-800"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Your Special Surprise
          </motion.h2>
          
          <motion.p className="text-purple-700 mb-8">
            Unlock a heartfelt message with our secret code
          </motion.p>
          
          <motion.button
            onClick={() => setShowSurprise(true)}
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center justify-center gap-3 mx-auto"
          >
            <FaLockOpen className="text-xl" />
            Unlock Your Surprise
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showSurprise && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl max-w-md w-full shadow-2xl border-2 border-pink-300"
              >
                {!isPasswordCorrect ? (
                  <>
                    <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center justify-center gap-2">
                      <FaLockOpen className="text-pink-500" />
                      Enter Our Secret Code
                    </h3>
                    
                    <p className="text-pink-600 mb-4">
                      Hint: Your nickname or our special date (MMDD)
                    </p>
                    
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Type our secret code..."
                      className="w-full p-4 border-2 border-pink-300 rounded-xl mb-6 text-center text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowSurprise(false)}
                        className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={checkPassword}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-xl font-medium shadow-md"
                      >
                        Unlock
                      </button>
                    </div>
                  </>
                ) : (
                <div className="text-center">
  <h3 className="text-3xl font-bold mb-6 text-purple-800">
    Happy 3rd Anniversary, My Love
  </h3>

  <motion.div 
    className="text-5xl mb-6 text-pink-500"
    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
    transition={{ duration: 1.5 }}
  >
    💖
  </motion.div>

  <p className="text-lg text-purple-700 mb-6 leading-relaxed italic">
    "Every moment with you feels like a beautiful dream I never want to wake up from. 
    Three years have flown by, yet my love for you grows stronger with each passing day. 
    You are my everything - my joy, my comfort, my home. Here's to forever with you."
  </p>

  <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl flex items-center justify-center mb-6 overflow-hidden h-64">
    <img src="/098.jpg" alt="" className="h-full w-auto object-cover" />
  </div>

  <button
    onClick={() => {
      setShowSurprise(false);
      setIsPasswordCorrect(false);
      triggerConfetti();
    }}
    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-md w-full"
  >
    Close & Keep Loving You
  </button>
</div>

                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Final Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 z-0"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            To Eternity and Beyond
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-purple-800 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I promise to love you more each day, to be your shelter in storms, 
            and your partner in every adventure life brings us.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {["❤️", "💕", "💞", "💓", "💗", "💖"].map((heart, i) => (
              <motion.div
                key={i}
                className="text-4xl"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {heart}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button
            onClick={triggerConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
          >
            Celebrate Our Love
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-purple-700 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-200">
        <p className="mb-2">Created with ❤️ for the love of my life</p>
        <p>Our journey continues forever...</p>
        <p>From your buddhu 😁</p>
      </footer>
    </div>
  );
}