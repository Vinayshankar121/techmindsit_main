import { supabase } from '@/lib/integrations/supabase/client';

export async function submitContact(data: { name: string; email: string; subject: string; message: string }) {
  const { error } = await supabase.from('contacts').insert([data]);
  if (error) throw error;
}

export async function submitApplication(
  data: {
    full_name: string;
    email: string;
    phone: string;
    experience: string;
    cover_letter: string;
    position: string;
  },
  resumeFile?: File
) {
  let resume_url: string | null = null;

  if (resumeFile) {
    const fileExt = resumeFile.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from('resumes').upload(fileName, resumeFile);
    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(fileName);
    resume_url = urlData.publicUrl;
  }

  const { error } = await supabase.from('career_applications').insert([
    {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      experience: data.experience,
      cover_letter: data.cover_letter || '',
      position: data.position,
      resume_url,
    },
  ]);
  if (error) throw error;
}


