# FANTOWNS Review Collection Guidelines

## ⚠️ CRITICAL: Only Real Reviews

**NEVER add fake reviews.** This damages trust, violates Google's guidelines, and can result in:
- Search engine penalties
- Loss of rich snippet features
- Legal issues
- Permanent damage to brand reputation

**If you don't have real reviews yet, that's okay!** Leave the review sections empty or show "Be the first to review" messaging.

---

## ✅ How to Collect Real Reviews

### 1. **Post-Visit Email Campaign**

After users visit a city (if you track bookings):
```
Subject: How was [City Name]? Share your experience!

Hi [Name],

You recently visited [City Name] using our FANTOWNS guide. We'd love to hear about your experience!

Your review helps fellow fans discover amazing experiences and helps us improve our recommendations.

[Leave a Review Button]

As a thank you, reviewers get:
- Early access to new city guides
- Exclusive fan travel tips
- Entry into monthly prize drawing

Thank you for being part of the FANTOWNS community!
```

### 2. **Social Media Collection**

Monitor these platforms:
- Instagram: Search hashtag #FANTOWNS + city name
- Twitter/X: Mentions of FANTOWNS
- Facebook: Check-ins and tags
- Reddit: Travel and sports subreddits

**When you find a positive experience:**
1. Comment: "We'd love to feature your story on FANTOWNS! Can we reach out?"
2. DM the user for permission
3. Get written consent to use their review
4. Verify they actually visited (ask for photos, details)

### 3. **Direct Submission Form**

Create a Google Form or Typeform:

**Questions to ask:**
- Full Name (will be displayed)
- Email (for verification only)
- City/Country you're from
- Which FANTOWNS city did you visit?
- When did you visit? (Month/Year)
- Overall rating (1-5 stars)
- Review title (max 100 characters)
- Full review (min 100 words, max 500 words)
- What recommendations from our guide did you use?
- Upload photos (optional)
- Permission to feature your review: Yes/No

### 4. **Incentivized Reviews (HONEST ONLY)**

Offer small incentives for reviews:
- $5 Amazon gift card
- Exclusive downloadable city guide
- Featured on social media
- Entry into prize drawing

**CRITICAL:** Incentives are for leaving a review, NOT for positive reviews. Must allow honest feedback (1-5 stars).

---

## ✅ Review Verification Process

Before adding ANY review to `review-data.js`:

### Step 1: Identity Verification
- [ ] Verify email address is real (send confirmation email)
- [ ] Check social media profiles exist and seem genuine
- [ ] Google their name + city to confirm they're a real person

### Step 2: Visit Verification
Ask for proof of visit:
- [ ] Photos from the stadium/venue (with metadata/timestamp)
- [ ] Ticket stubs or booking confirmations
- [ ] Specific details that only someone who visited would know

### Step 3: Content Quality Check
- [ ] Review is at least 100 words (substantive)
- [ ] Mentions specific places/experiences
- [ ] Sounds authentic (not generic/templated)
- [ ] No spam links or promotional content
- [ ] Proper grammar and spelling (edit lightly if needed, with permission)

### Step 4: Legal Protection
- [ ] Get written permission to publish (email saved)
- [ ] Confirm they own rights to any photos
- [ ] Have them accept terms that review can be used on site/marketing

### Step 5: Add to Database
Only after ALL checks pass:
```javascript
{
  id: 'liv-001',
  verified: true,  // ✅ Only after verification
  author: "Sarah Johnson",
  location: "Boston, USA",
  date: "2024-01-15",  // Date review was submitted
  rating: 5,
  visitDate: "December 2023",
  title: "Anfield Exceeded All Expectations",
  content: "Full review text here...",
  helpful: 0,  // Starts at 0, users can upvote
  photos: [],  // URLs after uploading to your server
  verified_purchase: false,  // Only true if booked through FANTOWNS
  response: null
}
```

---

## ❌ Red Flags - DO NOT Publish

### Fake Review Indicators
- [ ] Generic content (could apply to any city)
- [ ] Posted within days of site launch
- [ ] Overly enthusiastic without specifics
- [ ] Multiple reviews from same IP address
- [ ] Email addresses that are suspicious (temp emails)
- [ ] Can't verify person exists on social media
- [ ] User can't provide proof of visit
- [ ] Review reads like marketing copy
- [ ] All 5-star reviews (suspicious if no variation)

### Spam/Malicious Reviews
- [ ] Contains links to external sites
- [ ] Promotional content
- [ ] Competitor bashing
- [ ] Inappropriate language
- [ ] Factually incorrect information
- [ ] Violates privacy (names other people without consent)

---

## 📊 Review Display Best Practices

### Show Statistics Honestly
```javascript
// Calculate real aggregates
Liverpool: 4.8 stars (24 reviews)
Tokyo: 4.9 stars (18 reviews)
Green Bay: 4.7 stars (31 reviews)
```

### Display Verification Badges
- ✅ **Verified Visit** - We confirmed they actually visited
- 🎫 **Verified Booking** - Booked through FANTOWNS
- 📸 **Photo Verified** - Uploaded photos from their trip

### Show Distribution
```
5 stars: ████████████ 67% (16 reviews)
4 stars: ████████     33% (8 reviews)
3 stars: ██           8%  (2 reviews)
2 stars:              0%  (0 reviews)
1 star:               0%  (0 reviews)
```

### Feature Helpful Reviews
- Let users mark reviews as "helpful"
- Display most helpful at top
- Mix positive and critical (shows authenticity)

---

## 🤝 Responding to Reviews

### Positive Reviews
```
Thank you for sharing your Anfield experience, Sarah! We're thrilled the guide helped make your trip unforgettable. 'You'll Never Walk Alone' truly is magical. We'd love to feature your photos on our Instagram - can we tag you? 🔴⚽
```

### Constructive Criticism
```
Thanks for the honest feedback, Mike. We're sorry the hotel recommendation didn't meet expectations. We're reviewing our Liverpool accommodations and will update the guide. Your input helps us improve for future visitors!
```

### Negative Reviews (Rare, but handle professionally)
- Don't delete unless spam/fake
- Respond professionally and helpfully
- Offer to make it right if appropriate
- Shows you care about user experience

---

## 📈 Building Review Volume

### Start Small, Grow Authentic
**Months 1-3:**
- Target: 5-10 verified reviews per top city
- Focus on Liverpool, Tokyo, Nashville (most popular)
- Quality over quantity

**Months 4-6:**
- Target: 20-30 reviews per top city
- Expand to all 21 cities (2-5 reviews each)
- Feature reviews on social media

**Months 7-12:**
- Target: 50+ reviews per top city
- User-generated content campaigns
- Video testimonials
- Partnership reviews (travel bloggers, etc.)

---

## 🎯 SEO Benefits of Real Reviews

### What Google Rewards
✅ Verified reviews with structured data (Schema.org)
✅ Photos and rich media
✅ Diverse ratings (not all 5 stars)
✅ Detailed, specific content
✅ Regular review additions (shows active site)
✅ Response to reviews (shows engagement)

### What Google Penalizes
❌ Fake reviews (detected by patterns)
❌ All 5-star reviews (unrealistic)
❌ Generic content
❌ Review stuffing (adding too many at once)
❌ Paid positive reviews (illegal in some jurisdictions)
❌ Deleted negative reviews (red flag)

---

## 📋 Monthly Review Checklist

- [ ] Check submission form for new reviews
- [ ] Verify new reviewers (identity + visit)
- [ ] Add verified reviews to review-data.js
- [ ] Respond to all reviews (within 48 hours)
- [ ] Update aggregate ratings in city pages
- [ ] Feature 1-2 reviews on social media
- [ ] Send thank you emails to reviewers
- [ ] Monitor review helpfulness votes
- [ ] Check for spam/fake reviews to remove
- [ ] Update REVIEW-GUIDELINES.md if needed

---

## 💡 Creative Collection Ideas

### 1. **Fan Photo Contest**
"Share your FANTOWNS adventure photo for a chance to win!"
- Winner gets $100 Amazon gift card
- Must include review with photo submission
- All entries displayed in city galleries

### 2. **Story Swaps**
"Share your story, get exclusive content"
- Trade: User writes review → Gets exclusive travel guide PDF
- Positions reviews as valuable content exchange

### 3. **Review Parties**
After major sporting events:
- "Just watched the Super Bowl/Champions League final?"
- "Tell us about your stadium experience!"
- Capitalize on post-event energy

### 4. **Travel Blogger Partnerships**
- Partner with micro-influencers (10k-50k followers)
- Free city guide in exchange for honest review
- MUST disclose partnership (#ad or #sponsored)

---

## 🔒 Legal Considerations

### Terms of Service
Include in review submission:
- User grants permission to publish
- User owns rights to content/photos
- FANTOWNS can use for marketing
- User can request removal anytime
- Privacy policy for email storage

### FTC Compliance (USA)
- Disclose if reviews are incentivized
- Can't require positive reviews
- Can't edit negative to positive
- Must allow 1-5 star ratings

### GDPR (Europe)
- Users can request data deletion
- Store only necessary information
- Don't sell review data
- Clear privacy policy

---

## ✨ The Golden Rule

**If you wouldn't trust it yourself, don't publish it.**

Would you book a hotel based on this review? Would you visit a city based on this recommendation? If no, keep collecting until you have reviews you're proud to display.

Authentic reviews take time. That's okay. Building trust is a marathon, not a sprint.

---

*Last Updated: January 2025*
*Questions? Need help verifying reviews? Contact: admin@fantowns.com*
