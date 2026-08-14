# RSVP → Google Sheet

The website posts each RSVP to a Google Apps Script web app, which appends a row to a spreadsheet.

## One-time setup (about 3 minutes)

1. Open [Google Sheets](https://sheets.google.com) and create a blank spreadsheet, e.g. **Sara & Jonatas RSVPs**.
2. **Extensions → Apps Script**. Delete any placeholder code.
3. Paste the contents of `Code.gs` from this folder. Save.
4. **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the web app URL (`https://script.google.com/macros/s/.../exec`).
6. In the project root, create `.env.local`:

   ```
   VITE_RSVP_SCRIPT_URL=https://script.google.com/macros/s/PASTE_ID_HERE/exec
   ```

7. For the live site, add the same variable in Vercel:

   **Project → Settings → Environment Variables**  
   Name: `VITE_RSVP_SCRIPT_URL`  
   Value: the web app URL  
   Then redeploy.

Share the Google Sheet with Sara and Jonatas (Viewer or Editor).
