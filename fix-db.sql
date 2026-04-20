-- 1. Create a secure function to fetch reviews
CREATE OR REPLACE FUNCTION get_rigsel_reviews()
RETURNS SETOF rigsel_schema.reviews AS $$
BEGIN
  RETURN QUERY SELECT * FROM rigsel_schema.reviews WHERE status = 'approved' ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Create a secure function to submit reviews
CREATE OR REPLACE FUNCTION insert_rigsel_review(p_name TEXT, p_location TEXT, p_rating INT, p_text TEXT)
RETURNS void AS $$
BEGIN
  INSERT INTO rigsel_schema.reviews(name, location, rating, text, status)
  VALUES (p_name, p_location, p_rating, p_text, 'pending');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Grant access to these functions to anon (the public role)
GRANT EXECUTE ON FUNCTION get_rigsel_reviews() TO anon;
GRANT EXECUTE ON FUNCTION insert_rigsel_review(TEXT, TEXT, INT, TEXT) TO anon;
