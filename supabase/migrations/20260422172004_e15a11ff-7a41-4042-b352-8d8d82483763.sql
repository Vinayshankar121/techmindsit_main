
-- Add resume_url column
ALTER TABLE public.career_applications ADD COLUMN resume_url text;

-- Make cover_letter nullable
ALTER TABLE public.career_applications ALTER COLUMN cover_letter DROP NOT NULL;

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true);

-- Allow anyone to upload to resumes bucket
CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- Allow anyone to read resumes
CREATE POLICY "Anyone can read resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes');
