import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vcqtlgntnpyhzmnauyiv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjcXRsZ250bnB5aHptbmF1eWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NDIzMTQsImV4cCI6MjA0MjIxODMxNH0.BMvcbN8RdR1xW8OaRf1iJwuLN4mk1S05kcggRgDfwn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadToSupabase = async (file) => {
  const fileName = `${Date.now()}_${file.name}`;
  
  // Determine the MIME type of the file
  const contentType = file.type || "application/octet-stream"; // Default to binary stream if no type is found
  
  const { data, error } = await supabase.storage
    .from("chati")
    .upload(fileName, file, {
      upsert: false,
      cacheControl: "3600",
      contentType, // Set content type explicitly
    });

  if (error) {
    throw new Error("Error uploading file: " + error.message);
  }

  const urlData = supabase.storage.from("chati").getPublicUrl(fileName);

  return urlData?.data?.publicUrl; // Return the public URL of the uploaded file
};
