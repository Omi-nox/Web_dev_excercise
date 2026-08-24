import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // ✅ Real icons

const API_URL = `${import.meta.env.VITE_API_BASE}/api/likes`;

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Fetch likes and check localStorage on mount
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setLikes(data.count);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchLikes();

    // Check if user already liked
    const liked = localStorage.getItem('hasLiked') === 'true';
    setHasLiked(liked);
  }, []);

  const handleLike = async () => {
    if (loading || hasLiked) return;

    setLoading(true);
    try {
      const res = await fetch(API_URL, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to like');
      const data = await res.json();
      setLikes(data.count);

      // Set localStorage flag
      localStorage.setItem('hasLiked', 'true');
      setHasLiked(true);

      // Show flash message
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } catch (err) {
      console.error('Like error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block  max-h-[40px] ">
      {/* Flash Message */}
      {showMessage && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#10b981] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-[#10b981]/30 animate-bounce whitespace-nowrap z-10">
          Thanks for liking!
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={loading || hasLiked}
        className={`
          group relative flex items-center gap-3 px-6 py-3 rounded-full
          bg-gradient-to-r from-[#111827] to-[#1f2937]
          border transition-all duration-300
          ${hasLiked ? 'border-[#10b981]/50 shadow-lg shadow-[#10b981]/20' : 'border-[#1f2937] hover:border-[#6366f1]'}
          ${(loading || hasLiked) ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}
          mt-1
          `}
      >
        {/* Real Icon – Outline when not liked, filled when liked */}
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {hasLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-[#64748b] group-hover:text-red-400" />
          )}
        </span>

        <span className="text-[#f1f5f9] font-medium  text-xs md:text-sm">
          {loading ? '...' : hasLiked ? `Liked ` : 'Leave a like'}

        </span>

        <span className="flex flex-col text-[#64748b]  bg-[#0a0a0a] px-3 py-0.5 rounded-full   text-xs md:text-sm">
          {likes}
        </span>

      </button>
      {/* ✅ "people like this" – Button ke neeche */}
      {likes > 0 && (
        <div className="text-center ">
          <span className="text-[#64748b] text-xs sm:text-sm">
            {likes} {likes === 1 ? 'person' : 'people'} like this
          </span>
        </div>
      )}
      {/* Already liked label */}
      {hasLiked && !showMessage && (
        <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 text-[#10b981] text-xs sm:text-sm font-medium whitespace-nowrap z-10">
          You already liked this!
        </div>
      )}
    </div>
  );
}

export default LikeButton;