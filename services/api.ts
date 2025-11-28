export interface LeadData {
  name: string;
  email: string;
  phone: string;
  revenue: string;
}

export const submitLead = async (data: LeadData): Promise<boolean> => {
  // We use FormSubmit.co to bridge the frontend to your Gmail & Trello.
  // 1. Primary recipient: elevendigitaloficial@gmail.com
  // 2. CC: Trello Board Email
  
  const ENDPOINT = "https://formsubmit.co/ajax/elevendigitaloficial@gmail.com";
  const TRELLO_EMAIL = "ezequielmuniz5+nfhgenu26dayzw49vnie@boards.trello.com";

  // Use FormData for maximum compatibility.
  // CRITICAL: Do NOT set 'Content-Type' header when sending FormData; browser does it automatically.
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("revenue", data.revenue);
  formData.append("_subject", `LEAD: ${data.name} - ${new Date().toLocaleDateString()}`);
  formData.append("_cc", TRELLO_EMAIL);
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json"
        // No Content-Type header here!
      },
      body: formData
    });

    const result = await response.json();
    console.log("FormSubmit response:", result);
    return true;
  } catch (error) {
    console.error("FormSubmit Error:", error);
    // Even if it fails (e.g. adblocker), we resolve true to let user book calendar
    return true; 
  }
};