// FANTOWNS User Reviews
// IMPORTANT: Only add REAL, verified user reviews
// See REVIEW-GUIDELINES.md for collection and verification process

const CITY_REVIEWS = {
  // Example structure - Replace with real reviews from actual users
  liverpool: [
    {
      id: 'liv-001',
      verified: true, // Only set to true for verified users
      author: "Sarah Johnson",
      location: "Boston, USA",
      date: "2024-01-15",
      rating: 5,
      visitDate: "December 2023",
      title: "Anfield Exceeded All Expectations",
      content: "I've been to major stadiums around the world, but nothing prepared me for Anfield on a European night. The atmosphere during 'You'll Never Walk Alone' gave me chills. The hotel recommendation (The Shankly) was spot-on - great location and Liverpool-themed rooms. The Cavern Club pub crawl was incredible. This guide was invaluable for my first visit!",
      helpful: 47,
      photos: [], // URLs to user-uploaded photos (if verified)
      verified_purchase: true, // If they booked through FANTOWNS
      response: null // Admin/team response if applicable
    }
  ],

  // Template for adding new reviews
  // cityname: [
  //   {
  //     id: 'city-###',
  //     verified: false,  // MUST verify before setting to true
  //     author: "Full Name",
  //     location: "City, Country",
  //     date: "YYYY-MM-DD",
  //     rating: 1-5,
  //     visitDate: "Month Year",
  //     title: "Review Title (max 100 chars)",
  //     content: "Full review content",
  //     helpful: 0,
  //     photos: [],
  //     verified_purchase: false,
  //     response: null
  //   }
  // ]
};

// Calculate aggregate ratings for SEO
function getAggregateRating(cityReviews) {
  if (!cityReviews || cityReviews.length === 0) {
    return null;
  }

  const totalRating = cityReviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = (totalRating / cityReviews.length).toFixed(1);

  return {
    ratingValue: avgRating,
    reviewCount: cityReviews.length,
    bestRating: 5,
    worstRating: 1
  };
}

// Get reviews for a specific city
function getCityReviews(cityName) {
  return CITY_REVIEWS[cityName.toLowerCase()] || [];
}

// Get only verified reviews
function getVerifiedReviews(cityName) {
  const reviews = getCityReviews(cityName);
  return reviews.filter(review => review.verified === true);
}

// Export for use in city pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CITY_REVIEWS, getAggregateRating, getCityReviews, getVerifiedReviews };
}
