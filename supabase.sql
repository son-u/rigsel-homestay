-- 1. Create the Schema
CREATE SCHEMA IF NOT EXISTS rigsel_schema;

-- 2. Create the Table
CREATE TABLE IF NOT EXISTS rigsel_schema.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    location TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    text TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Insert the Dummy Testimonials
INSERT INTO rigsel_schema.reviews (name, location, rating, text, status, created_at)
VALUES
('Rohan Chatterjee', 'Kolkata, WB', 5, 'The perfect escape from city life. Waking up to the view of the Kalimpong hills from the wooden rooms was surreal. The organic Gorkhali thali they served for lunch is something I''ll remember for a long time.', 'approved', NOW() - INTERVAL '5 days'),
('Nisha Sharma', 'Delhi', 5, 'Absolutely loved the hospitality! The family makes you feel like one of their own. We stayed in the Four Bed room and it was incredibly spacious. The mint tea in the evening while watching the sunset was magical.', 'approved', NOW() - INTERVAL '4 days'),
('Aditya Desai', 'Mumbai, MH', 5, 'If you want an authentic mountain homestay experience without the commercialized feel, this is it. Kaffer Gaon is peaceful, and Rigsel Homestay sits right in the best spot. The wood-fire meals were outstanding.', 'approved', NOW() - INTERVAL '3 days'),
('Priyanka Das', 'Siliguri, WB', 5, 'A beautiful property with even more beautiful hosts. The highlight was sitting by the fire at night, eating freshly made momos and listening to local stories. The rooms are cozy, beds are warm, and the bathroom was spotless.', 'approved', NOW() - INTERVAL '2 days'),
('Vikram Singh', 'Bengaluru, KA', 5, 'Remote but entirely worth the journey. The lack of crowd makes it so peaceful. Sourced entirely from their farm, the food is incredible. They arranged a cab for us from NJP seamlessly. Truly a 5-star experience.', 'approved', NOW() - INTERVAL '1 day');

-- Optional: Since we only push/pull data via a secure server action, we technically don't need RLS.
-- But if you ever expose this schema to the Supabase Dat API, remember to enable RLS:
-- ALTER TABLE rigsel_schema.reviews ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public read of approved reviews" ON rigsel_schema.reviews FOR SELECT USING (status = 'approved');
